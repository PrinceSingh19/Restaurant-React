import { PROMOTIONS } from "../../shared/promotions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	promotions: PROMOTIONS,
};
export const stateSlice = createSlice({
	name: "promotions",
	initialState,
});

export default stateSlice.reducer;
