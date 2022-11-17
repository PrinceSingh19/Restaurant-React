import { baseUrl } from "../../shared/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	leadersLoading: true,
	errLeaders: null,
	leaders: [],
};

export const getLeaders = createAsyncThunk("leaders/getLeaders", async (_, { rejectWithValue }) => {
	try {
		const res = await fetch(baseUrl + "leaders");
		const data = await res.json();
		if (!res.ok) {
			var error = new Error("Error " + res.status + ": " + res.statusText);
			error.res = res;
			throw error;
		}
		return data;
	} catch (err) {
		return rejectWithValue(err.message);
	}
});
export const leadersSlice = createSlice({
	name: "leaders",
	initialState,
	reducers: {
		leaders: (state, action) => {
			state.leaders = state.leaders.concat(action.payload);
		},
	},
	extraReducers: {
		[getLeaders.pending]: (state) => {
			state.leadersLoading = true;
		},
		[getLeaders.fulfilled]: (state, action) => {
			state.leadersLoading = false;
			state.leaders = action.payload;
		},
		[getLeaders.rejected]: (state, action) => {
			state.leadersLoading = false;
			state.errLeaders = action.payload;
		},
	},
});

export default leadersSlice.reducer;
