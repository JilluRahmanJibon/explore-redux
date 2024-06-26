import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TCounterType = {
	value: number;
};

const initialState: TCounterType = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		},
		incrementByValue: (state, action: PayloadAction<number>) => {
			state.value = state.value + action.payload;
		},
	},
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
