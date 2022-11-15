import { baseUrl } from "../../shared/baseUrl";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	commLoading: false,
	errComm: null,
	comments: [],
};

export const postComments = createAsyncThunk(
	"comments/postComments",
	async (data, { rejectWithValue }) => {
		const { dishId, rating, author, comment } = data;
		try {
			const res = await fetch(baseUrl + "comments", {
				method: "POST",
				body: JSON.stringify({
					dishId: dishId,
					rating: rating,
					comment: comment,
					author: author,
					date: new Date(),
				}),
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "same-origin",
			});
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
	}
);
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
				// passing this b/c I want to show the received date data in IsoString format
				return {
					payload: {
						...value,
						date: new Date().toISOString(),
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
		[postComments.pending]: (state, action) => {
			//adding data b/c it shows the data delayed by the fecthing time and donot hold at submit button when clicked
			state.commLoading = action.payload;
		},
		[postComments.fulfilled]: (state, action) => {
			state.comments = state.comments.concat(action.payload);
		},
		[postComments.rejected]: (state, action) => {
			console.log("Rejected");
		},
	},
});
export const { postComment, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
