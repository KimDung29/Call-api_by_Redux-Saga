import {
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import axios, { CancelToken } from "axios";



interface CatState {
  isLoading: boolean;
  error: SerializedError | null;
  cats: [];

}

const initialState:CatState = {
  isLoading: false,
  error: null,
  cats: [],

};

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
      state.error = new Error();
    }
  },
  
});
export const { getCatsFetch, getCatsSuccess, getCatsFailure  } = catSlice.actions;

 export default catSlice.reducer;
