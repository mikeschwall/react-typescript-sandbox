import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addSong, removeSong, Song } from "../store/slices/Songslice";
import { reset } from "../actions";

const SongList = () => {

    const songs = useSelector((state:RootState) => state.songs);
    const dispatch = useDispatch();

    const handleRemove = (song:string) => {
        dispatch(removeSong(song))
    }

    const handleAdd = (song:Song) => {
        dispatch(addSong(song))
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <div>
            <h2>Songs</h2>
            <button onClick={() => handleAdd({title:"Song 7"})}>add</button> <button onClick={() => handleReset()}>reset</button>
            {songs && songs.map(item => <li key={item.title}>{item.title} <button onClick={() => handleRemove(item.title)}>x</button></li>)}
        </div>
    )
}

export default SongList;