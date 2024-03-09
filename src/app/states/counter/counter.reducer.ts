import { createReducer, on } from "@ngrx/store";
import { decreament, increament, reset } from "./counter.action";

export interface CounterState {
    count : number
}

export const initialState : CounterState = {
    count :0
}

export const counterReducer = createReducer(
    initialState,
    on(increament, state => ({...state , count: state.count+1})),
    on(decreament, state => ({...state , count: state.count-1})),
    on(reset, state => ({...state , count: 0}))
)
