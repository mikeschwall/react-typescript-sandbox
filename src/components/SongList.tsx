import React from 'react';
import styles from './SongList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../store'
import { addSong, removeSong } from '../store/slices/Songslice';
import { reset } from '../actions';

const SongList:React.FC = () => {

    const songs = useSelector((state:RootState) => state.songs);
    const dispatch = useDispatch();

    const handleRemove = (song:{title:string}) => {
        dispatch(removeSong(song.title));
    }

    const handleAdd = (song:{title:string}) => {
        dispatch(addSong(song));
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <div>
            <h2 className={styles.header}>Songs</h2>
            <button onClick={() => handleAdd({title:"song 7"})}>add</button> | 
            <button onClick={() => handleReset()}>reset</button>
            {songs && songs.map((item) => <li key={item.title}>{item.title} 
                <button onClick={() => handleRemove(item)}>X</button>
            </li>)}
        </div>
    )
}

export default SongList;