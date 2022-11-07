import { COMMENTS } from "../../shared/comments";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	comments: COMMENTS,
};
export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		addComment(state = COMMENTS, action) {
			const payload = action.payload;
			console.log(payload);
			/* var comment = action.payload;
			comment.id = state.length;
			comment.date = new Date().toISOString();
			console.log("Comment: ", comment);
			return state.concat(comment); */
		},
	},
});
export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
