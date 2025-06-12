import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addSong, removeSong } from '../store/slices/songslice';
import { reset } from '../store/actions';

const SongList:React.FC = () => {

    const songs = useSelector((state:RootState) => state.songs);

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

    return <>
        <h2>Songs</h2>
        <button onClick={() => handleAdd({title:"song 8"})}>add song</button> 
        <button onClick={() => handleReset()}>reset</button>
        {songs && songs.map(item => <li key={item.title}>{item.title} 
            <button onClick={() => handleRemove(item.title)}>remove</button>
        </li>)}
    </>
}

export default SongList;