import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reset } from "../../actions";

export interface Song {
    title:string;   

}

const initialState = [
    {title:"song one"},
    {title:"song two"},
    {title:"song three"},
    {title:"song four"},
    {title:"song five"}
]

export const songSlice = createSlice({
    name:"songs",
    initialState,
    reducers: {
        addSong(state, action:PayloadAction<Song>) {
            state.push(action.payload);
        },
        removeSong(state,action:PayloadAction<string>) {
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