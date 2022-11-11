import { DISHES } from "../../shared/dishes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: true,
	errMsg: null,
	dishes: [],
};

export const getDishes = createAsyncThunk("dishes/getDishes", () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(DISHES);
		}, 2000);
	});
});
export const dishesSlice = createSlice({
	name: "dishes",
	initialState,
	reducers: {
		dish: (state, action) => {
			state.dishes = state.dishes.concat(action.payload);
		},
	},
	extraReducers: {
		[getDishes.pending]: (state) => {
			state.isLoading = true;
		},
		[getDishes.fulfilled]: (state, action) => {
			console.log(action);
			state.isLoading = false;
			state.dishes = action.payload;
		},
		[getDishes.rejected]: (state, action) => {
			state.isLoading = false;
			state.errMsg = action.payload;
		},
	},
});

export default dishesSlice.reducer;
