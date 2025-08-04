import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../store";
import { addSong, removeSong } from "../slices/Songslice";
import { reset } from "../actions";

export interface Song {
    title:string;
}

const SongList:React.FC = () => {

    const songs = useSelector((state:RootType) => state.songs);
    const dispatch = useDispatch();

    const handleDelete = (song:Song) => {
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
            <button onClick={() => handleAdd({title:'song 7'})}>add song</button> <button onClick={() => handleReset()}>reset</button>
            {songs && songs.map(item => <li key={item.title}>{item.title} <button onClick={() => handleDelete(item)}>X</button></li>)}
        </div>
    )
}

export default SongList;