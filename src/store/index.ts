import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./apis/Todoapi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { songSlice } from "./slices/Songslice";

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

export const store = configureStore({
    reducer: {
        [todoApi.reducerPath]:todoApi.reducer,
        [songSlice.name]:songSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(todoApi.middleware);
    }
})

setupListeners(store.dispatch);
console.log(store.getState());

export type RootType = ReturnType<typeof store.getState>