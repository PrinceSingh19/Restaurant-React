import { DISHES } from "../../shared/dishes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dishes: DISHES,
};
export const dishesSlice = createSlice({
	name: "dishes",
	initialState,
});

export default dishesSlice.reducer;
