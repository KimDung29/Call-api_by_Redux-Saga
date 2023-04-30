import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import rootReducer, { RootState } from "./reducer";
import createSagaMiddleware from 'redux-saga'
import catSaga from "../catSaga";


const saga = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [saga]
});

saga.run(catSaga);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
