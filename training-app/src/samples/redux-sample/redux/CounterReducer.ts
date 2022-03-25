import { createReducer, createSelector } from "@reduxjs/toolkit";
import { decrement, increment, incrementByAmount } from "./CounterActions";
import { RootState } from "./store";

interface CounterState {
    value: number
}

const initialState = { value: 0 } as CounterState;

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++
    })
    .addCase(decrement, (state) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
});

export const selectCounterState = (state: RootState) => state.count;
export const selectCounterValue = createSelector(selectCounterState, (state: CounterState) => state.value);
