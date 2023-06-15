import {
	configureStore,
	combineReducers,
	applyMiddleware,
} from "@reduxjs/toolkit";
import { userReducer } from "./UserReducer";
import { likesReducer } from "./otherReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	users: userReducer,
	likes: likesReducer,
});

export const store = configureStore(
	{ reducer: rootReducer },
	composeWithDevTools(applyMiddleware(thunk))
);
