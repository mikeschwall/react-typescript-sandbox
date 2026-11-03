import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./apis/Todoapi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { songSlice } from "./slices/Songslice";

export const store = configureStore({
    reducer: {
        [songSlice.name]:songSlice.reducer,
        [todoApi.reducerPath]:todoApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(todoApi.middleware);
    }
})

setupListeners(store.dispatch);
export type RootType = ReturnType<typeof store.getState>