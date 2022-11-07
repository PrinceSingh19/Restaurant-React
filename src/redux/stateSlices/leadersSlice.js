import { LEADERS } from "../../shared/leaders";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	leaders: LEADERS,
};
export const stateSlice = createSlice({
	name: "leaders",
	initialState,
});

export default stateSlice.reducer;
