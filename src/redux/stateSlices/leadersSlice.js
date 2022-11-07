import { LEADERS } from "../../shared/leaders";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	leaders: LEADERS,
};
export const leadersSlice = createSlice({
	name: "leaders",
	initialState,
});

export default leadersSlice.reducer;
