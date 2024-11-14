import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    values: {
      languages: "French",
      levels: "A1 Beginner",
      price_per_hour: "30",
    },
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.values = { ...state.values, ...action.payload };
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
