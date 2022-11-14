import { baseUrl } from "../../shared/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	promoLoading: true,
	errPromo: null,
	promotions: [],
};

export const getPromos = createAsyncThunk(
	"promotions/getPromos",
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetch(baseUrl + "promotions");
			const data = await res.json();
			if (!res.ok) {
				var error = new Error("Error " + res.status + ": " + res.statusText);
				error.res = res;
				throw error;
			}
			console.log(data);
			return data;
		} catch (err) {
			return rejectWithValue(err.message);
		}
	}
);
export const promotionsSlice = createSlice({
	name: "promotions",
	initialState,
	reducers: {
		promotions: (state, action) => {
			state.promotions = state.promotions.concat(action.payload);
		},
	},
	extraReducers: {
		[getPromos.pending]: (state) => {
			state.promoLoading = true;
		},
		[getPromos.fulfilled]: (state, action) => {
			state.promoLoading = false;
			state.promotions = action.payload;
		},
		[getPromos.rejected]: (state, action) => {
			state.promoLoading = false;
			state.errPromo = action.payload;
		},
	},
});

export default promotionsSlice.reducer;
