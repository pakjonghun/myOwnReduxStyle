import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
const rootReducer = combineReducers({
  post: post.reducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
