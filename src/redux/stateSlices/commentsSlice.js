import { baseUrl } from "../../shared/baseUrl";
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	commLoading: true,
	errComm: null,
	comments: [],
};

export const getComments = createAsyncThunk(
	"comments/getComments",
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetch(baseUrl + "comments");
			const data = await res.json();
			return data;
		} catch (err) {
			return rejectWithValue("Oops could not get comments");
		}
	}
);
export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		addComment: {
			reducer: (state, action) => {
				state.comments = state.comments.concat(action.payload);
			},
			prepare: (value) => {
				return {
					payload: {
						...value,
						date: new Date().toISOString(),
						id: nanoid(),
					},
				};
			},
		},
	},
	extraReducers: {
		[getComments.pending]: (state) => {
			state.commLoading = true;
		},
		[getComments.fulfilled]: (state, action) => {
			state.commLoading = false;
			state.comments = action.payload;
		},
		[getComments.rejected]: (state, action) => {
			state.commLoading = false;
			state.errComm = action.payload;
		},
	},
});
export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
