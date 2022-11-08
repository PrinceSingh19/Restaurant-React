import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "./stateSlices/dishesSlice";
import commentsReducer from "./stateSlices/commentsSlice";
import leadersReducer from "./stateSlices/leadersSlice";
import promotionsReducer from "./stateSlices//promotionsSlice";

export default configureStore({
	reducer: {
		dishes: dishesReducer,
		comments: commentsReducer,
		leaders: leadersReducer,
		promotions: promotionsReducer,
	},
});
