import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reset } from "../actions";
import { Song } from "../components/SongList";

const initialState:Song[] = [
    {title:"song 1"},
    {title:"song 2"},
    {title:"song 3"},
    {title:"song 4"},
    {title:"song 5"}
]

export const songSlice = createSlice({
    name:"songs",
    initialState,
    reducers: {
        addSong(state,action:PayloadAction<Song>) {
            state.push(action.payload);
        },
        removeSong(state,action:PayloadAction<Song>) {
            const mysong = action.payload.title;
            const index = state.findIndex(p => p.title === mysong);
            state.splice(index,1);
        }
    },
    extraReducers(builder) {
        builder.addCase(reset,() => {
            return [];
        })
    }
})

export const {addSong,removeSong} = songSlice.actions;