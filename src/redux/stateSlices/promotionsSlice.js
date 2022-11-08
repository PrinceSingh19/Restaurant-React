import { PROMOTIONS } from "../../shared/promotions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	promotions: PROMOTIONS,
};
export const promotionsSlice = createSlice({
	name: "promotions",
	initialState,
});

export default promotionsSlice.reducer;
