import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./api/Todoapi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { songSlice } from "./slices/Songslice";

export const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        [songSlice.name]: songSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(todoApi.middleware);
    }
})

console.log(store.getState());
setupListeners(store.dispatch);
export type RootType = ReturnType<typeof store.getState>