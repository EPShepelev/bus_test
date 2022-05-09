import { applyMiddleware, createStore } from "redux";
import { postsReducer } from "./reducers/posts";
import thunk from "redux-thunk";

export const store = createStore(postsReducer, applyMiddleware(thunk));
