import { COMMENTS } from "../../shared/comments";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	comments: COMMENTS,
};

export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		addComment: {
			reducer: (state = initialState.comments, action) => {
				state.comments = state.comments.concat(action.payload);
			},
			prepare: (value) => {
				return {
					payload: {
						...value,
						date: new Date().toISOString(),
						id: Math.random(),
					},
				};
			},
		},
	},
});
export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
