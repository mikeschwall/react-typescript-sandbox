import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reset } from "../../actions";

const initialState = [
    {title:"song 1"},
    {title:"song 2"},
    {title:"song 3"},
    {title:"song 4"},
    {title:"song 5"}
]

export interface Song {
    title: string;
}

export const songSlice = createSlice({
    name:"songs",
    initialState,
    reducers: {
        addSong(state, action:PayloadAction<Song>) {
            state.push(action.payload);
        },
        removeSong(state, action: PayloadAction<string>) {
            const index = state.findIndex(p => p.title === action.payload);
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