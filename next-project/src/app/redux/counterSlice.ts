import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const counterSlice = createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        incrementByAmount: (state, action) => {state.value += action.payload},
    },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;

const Contador = () => {
    const count = useSelector((state: RootState) => state.counter.value);

    return 
       /// <h1>{count}</h1>;
};