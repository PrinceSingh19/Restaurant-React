import { baseUrl } from "../../shared/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: true,
	errMsg: null,
	dishes: [],
};

export const getDishes = createAsyncThunk("dishes/getDishes", async (_, { rejectWithValue }) => {
	try {
		const res = await fetch(baseUrl + "dishes");
		const data = await res.json();
		return data;
	} catch (err) {
		return rejectWithValue("Oops could not get Dishes");
	}
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
