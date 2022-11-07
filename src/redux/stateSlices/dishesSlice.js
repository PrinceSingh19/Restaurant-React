import { DISHES } from "../../shared/dishes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dishes: DISHES,
};
export const stateSlice = createSlice({
	name: "dishes",
	initialState,
});

export default stateSlice.reducer;
