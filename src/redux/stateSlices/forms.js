import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstname: "",
	lastname: "",
	telnum: "",
	email: "",
	agree: false,
	contactType: "Tel.",
	message: "",
};
export const formsSlice = createSlice({
	name: "forms",
	initialState,
	reducers: {
		afterSubmit: (state, action) => {
			state.firstname = action.payload.firstname;
			state.lastname = action.payload.lastname;
			state.telnum = action.payload.telnum;
			state.email = action.payload.email;
			state.agree = action.payload.agree;
			state.contactType = action.payload.contactType;
			state.message = action.payload.message;
		},
	},
});
export const { afterSubmit } = formsSlice.actions;
export default formsSlice.reducer;
