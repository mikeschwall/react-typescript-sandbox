import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootType } from '../store';
import { addSong, removeSong } from '../store/slices/Songslice';
import { reset } from '../actions';

const SongList:React.FC = () => {

    const songs = useSelector((state:RootType) => state.songs);
    const dispatch = useDispatch();

    const handleAdd = (song:{title:string}) => {
        dispatch(addSong(song));
    }

    const handleRemove = (song:string) => {
        dispatch(removeSong(song));
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return <section>
    <h2>Songs</h2>
    <button onClick={() => handleAdd({title:"Song 7"})}>add</button> 
    <button onClick={() => handleReset()}>reset</button>
    {songs && songs.map(item => <li key={item.title}>{item.title} <button onClick={() => handleRemove(item.title)}>X</button></li>)}
    </section>
}

export default SongList;