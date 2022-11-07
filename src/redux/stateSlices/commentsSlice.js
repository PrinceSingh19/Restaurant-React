import { COMMENTS } from "../../shared/comments";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	comments: COMMENTS,
};
export const stateSlice = createSlice({
	name: "comments",
	initialState,
});

export default stateSlice.reducer;
