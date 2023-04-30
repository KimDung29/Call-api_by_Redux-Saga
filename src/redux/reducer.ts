import { combineReducers } from "@reduxjs/toolkit";
import catsReducer from './catSlice'

export const rootReducer = combineReducers({
  cats: catsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
