import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong, Song } from "../store/slices/Songslice";
import { RootType } from "../store";
import { reset } from "../actions";

const SongList = () => {

    const songs = useSelector((state:RootType) => state.songs);
    const dispatch = useDispatch();

    return <>
        <h2>Songs</h2>
        <button onClick={() => dispatch(addSong({title:"song 8"}))}>add song</button> <button onClick={() => dispatch(reset())}>reset</button>
        <ul>
            {songs?.map((item:Song) => <li key={item.title}>{item.title} <button onClick={() => dispatch(removeSong(item.title))}>X</button></li>)}
        </ul>
    </>
}

export default SongList;