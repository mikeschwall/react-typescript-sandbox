import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../../actions";

const initialState = [
    {title:"Song 1"},
    {title:"song 2"},
    {title:"song 3"},
    {title:"song4"},
    {title:"song 5"}
]

export const songSlice = createSlice({
    name:"songs",
    initialState,
    reducers: {
        addSong(state,action) {
            state.push(action.payload);
        },
        removeSong(state,action) {
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