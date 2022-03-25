import { createAction } from "@reduxjs/toolkit";

const enum CounterActions {
    INCREMENT = 'counter/increment',
    DECREMENT = 'counter/decrement',
    INCREMENT_BY_AMOUNT = 'counter/increment-by-amount'
}

export const increment = createAction<void>(CounterActions.INCREMENT);
export const decrement = createAction<void>(CounterActions.DECREMENT);
export const incrementByAmount = createAction<number>(CounterActions.INCREMENT_BY_AMOUNT);