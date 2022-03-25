import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterReducer";

const reducer = combineReducers({
    count: counterReducer
})

export const store = configureStore({reducer})
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;