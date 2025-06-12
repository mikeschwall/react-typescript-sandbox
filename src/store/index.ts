import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query"
import { todoApi } from "./apis/todoapi";
import { songSlice } from "./slices/songslice";

export const store = configureStore({
    reducer: {
        [todoApi.reducerPath]:todoApi.reducer,
        [songSlice.name]: songSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(todoApi.middleware);
    }
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch);
console.log(store.getState());

