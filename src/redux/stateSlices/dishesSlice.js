import { DISHES } from "../../shared/dishes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: true,
	errMsg: null,
	dishes: [],
};
export const getDishes = createAsyncThunk("dishes/getDishes", () => {
	return DISHES;
});
export const dishesSlice = createSlice({
	name: "dishes",
	initialState,
	reducers: {},
	extraReducers: {
		[getDishes.pending]: (state) => {
			state.isLoading = true;
		},
		[getDishes.fulfilled]: (state, action) => {
			//console.log(action);
			state.isLoading = false;
			state.dishes = action.payload;
		},
		[getDishes.rejected]: (state, action) => {
			state.isLoading = false;
			console.log(action.payload);
			state.errMsg = action.payload;
		},
	},
});

export default dishesSlice.reducer;
