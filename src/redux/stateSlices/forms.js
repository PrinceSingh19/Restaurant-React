import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

const initialState = {
	feedback: [],
	formLoading: false,
	formError: null,
};

// sending data to server
export const postForms = createAsyncThunk("forms/postForms", async (data, { rejectWithValue }) => {
	const { firstname, lastname, telnum, email, agree, contactType, message } = data;

	try {
		const res = await fetch(baseUrl + "feedback", {
			method: "POST",
			body: JSON.stringify({
				firstname: firstname,
				lastname: lastname,
				telnum: telnum,
				email: email,
				agree: agree,
				contactType: contactType,
				message: message,
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
});

// fetching data from server
export const getForms = createAsyncThunk("forms/getForms", async (_, { rejectWithValue }) => {
	try {
		const res = await fetch(baseUrl + "feedback");
		const data = await res.json();
		return data;
	} catch (err) {
		return rejectWithValue("Oops could not get comments");
	}
});
export const formsSlice = createSlice({
	name: "forms",
	initialState,
	reducers: {
		getValues: (state = initialState, action) => {
			console.log(state.feedback);
			console.log(state);
			// alerting only the latest data entered by the user after fetching data from server
			alert(JSON.stringify("Your entered data is: " + state.feedback[state.feedback.length - 1]));
		},
	},
	extraReducers: {
		[getForms.fulfilled]: (state, action) => {
			state.formLoading = false;
			state.feedback = action.payload;
		},
		[getForms.rejected]: (state, action) => {
			state.formError = action.payload;
		},

		[postForms.fulfilled]: (state, action) => {
			// sending the entered data to server
			state.feedback = state.feedback.concat(action.payload);
			alert("Your form has been submitted successfully");
		},
		[postForms.rejected]: (state, action) => {
			alert("Could not post forms due to " + action.payload);
		},
	},
});
export const { getValues } = formsSlice.actions;
export default formsSlice.reducer;
