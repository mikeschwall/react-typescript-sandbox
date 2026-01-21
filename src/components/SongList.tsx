import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../store";
import { addSong, removeSong } from "../store/slices/Songslice";
import { reset } from "../actions";

const SongList = () => {

    const songs = useSelector((state:RootType) => state.songs);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Songs</h2>
            <button onClick={() => dispatch(addSong({title:"song 7"}))}>add song</button> <button onClick={() => dispatch(reset())}>reset</button>
            {songs?.map(item => <li key={item.title}>{item.title} <button onClick={() => dispatch(removeSong(item.title))}>X</button></li>)}
        </div>
    )
}

export default SongList;