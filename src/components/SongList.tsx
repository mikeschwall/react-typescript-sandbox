import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootType } from '../store';
import { addSong, removeSong, Song } from '../store/slices/Songslice';
import { reset } from '../actions';

const SongList:React.FC = () => {

    const songs = useSelector((state:RootType) => state.songs);
    const dispatch = useDispatch();

    const handleAdd = (song: Song) => {
        dispatch(addSong(song))
    }

    const handleRemove = (song:Song) => {
        dispatch(removeSong(song.title))
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <>
        <h2>Songs</h2>
        <div style={{marginBottom:"20px"}}>
            <button onClick={() => handleAdd({title:"song 7"})}>add song</button> 
        <button onClick={() => handleReset()}>reset</button>
        </div>
        {songs && songs.map(item => <li key={item.title}>{item.title} 
            <button onClick={() => handleRemove(item)}>X</button>
        </li>)}
        </>
    )
}

export default SongList