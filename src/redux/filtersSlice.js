
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    values: {
      location: "",
      ac: false,
      transmission: "",
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
      form: "",
    },
    favorites: initialState.favorites,
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.values = { ...state.values, ...action.payload };
    },
    setStatusLocationFilter: (state, action) => {
      state.values.location = action.payload;
    },
    resetFilters: (state) => {
      state.values = {
        location: "",
        ac: false,
        transmission: "",
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
        form: "",
      };
    },
    addToFavorites(state, action) {
      const exists = state.favorites.some(favorite => favorite.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  }
});

export const {
  setStatusFilter,
  setStatusLocationFilter,
  resetFilters,
  addToFavorites,
  removeFromFavorites,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;