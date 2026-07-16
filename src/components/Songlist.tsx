import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../store";
import { useEffect } from "react";
import { addSong, removeSong, Song } from "../store/slices/Songslice";
import { reset } from "../actions";

export const SongList = () => {

    const songs = useSelector((state:RootType) => state.songs);
    const dispatch = useDispatch();
    
    

    return <>
        <h2>Songs</h2>
        <button onClick={() => dispatch(addSong({title:"song 7"}))}>add</button> <button onClick={() => dispatch(reset())}>reset</button>
        {songs?.map((item:Song) => <li key={item.title}>{item.title}<button onClick={() => dispatch(removeSong(item.title))}>X</button></li>)}
    </>
}

export default SongList;