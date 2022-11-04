import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	dishes: DISHES,
	comments: COMMENTS,
	promotions: PROMOTIONS,
	leaders: LEADERS,
};
export const stateSlice = createSlice({
	name: "state",
	initialState,
});

export default stateSlice.reducer;
