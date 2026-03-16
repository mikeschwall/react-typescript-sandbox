import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./apis/todoapi";
import { songSlice } from "./slices/Songslice";

export const store = configureStore({
    reducer: {
        [todoApi.reducerPath]:todoApi.reducer,
        [songSlice.name]: songSlice.reducer
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare().concat(todoApi.middleware);
    }
})

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>