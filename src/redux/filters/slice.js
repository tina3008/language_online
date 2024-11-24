import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    values: {
      languages: "French",
      levels: "A1 Beginner",
      price_per_hour: "30",
    },
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.values = { ...state.values, ...action.payload };
    },

    addToFavorites(state, action) {
      const id = action.payload; // id преподавателя
      if (!state.favorites.includes(id)) {
        state.favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites(state, action) {
      const id = action.payload; // id преподавателя
      state.favorites = state.favorites.filter(
        (favoriteId) => favoriteId !== id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { setStatusFilter, removeFromFavorites, addToFavorites } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
