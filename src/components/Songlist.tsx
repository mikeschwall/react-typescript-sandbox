import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../store";
import { useEffect } from "react";
import { addSong, removeSong, Song } from "../store/slices/Songslice";
import { reset } from "../actions";

const Songlist = () => {

    const songs = useSelector((state:RootType) => state.songs);
    const dispatch = useDispatch();

    useEffect(() => {

    },[]);

    const handleAdd = (song:Song) => {
        dispatch(addSong(song))
    }

    const handleRemove = (song:string) => {
        dispatch(removeSong(song))
    }

    const handleReset = () => dispatch(reset())


    return (
        <div>
            <h2>Songs</h2>
            <button onClick={() => handleAdd({title:"song 7"})}>add song</button> <button onClick={() => handleReset()}>reset</button>
            {songs?.map((item:Song) => <li key={item.title}>{item.title} <button onClick={() => handleRemove(item.title)}>X</button></li>)}
        </div>
    )
}

export default Songlist;