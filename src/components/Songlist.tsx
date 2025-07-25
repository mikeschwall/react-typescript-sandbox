import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootType } from '../store';
import { addSong, removeSong } from '../store/slices/Songslice';
import { reset } from '../store/actions';

const SongList:React.FC = () => {

    const songs = useSelector((state:RootType) => state.songs);
    const dispatch = useDispatch();

    const handleRemove = (song:{title:string}) => {
        dispatch(removeSong(song.title))
    }

    const handleAdd = (song:{title:string}) => {
        dispatch(addSong(song));
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <div>
            <h2>Songs</h2>
            <button onClick={() => handleAdd({title:"Song 7"})}>add song</button> <button onClick={() => handleReset()}>reset</button>
            {songs && songs.map(item => <li key={item.title}>{item.title} <button onClick={() => handleRemove(item)}>X</button></li>)}
        </div>
    )
}

export default SongList;