import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./slice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    cars: Reducer,
    filters: filterReducer,
  },
});
