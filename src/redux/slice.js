import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCatalog, fetchCarById } from "./operations";
import { selectCatalog, selectFilter } from "./selectors";

const Slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    totalPage: "",
    loading: false,
    error: null,
    item: [],
    carDetails: {},
    selectCar: null,
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.totalPage = Math.ceil(action.payload.total / 4);
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCarById.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const visibleCars = createSelector(
  [selectCatalog, selectFilter],
  (cars, filters) => {
    return cars.filter((car) => {
      let matches = true;

      if (filters.location) {
        matches =
          matches &&
          car.location.toLowerCase().includes(filters.location.toLowerCase());
      }

      if (filters.ac) {
        matches = matches && car.AC === filters.ac;
      }

      if (filters.transmission) {
        matches = matches && car.transmission === filters.transmission;
      }

      if (filters.kitchen) {
        matches = matches && car.kitchen === filters.kitchen;
      }

      if (filters.tv) {
        matches = matches && car.TV === filters.tv;
      }

      if (filters.bathroom) {
        matches = matches && car.bathroom === filters.bathroom;
      }

      if (filters.form) {
        matches =
          matches &&
          car.form.toLowerCase().includes(filters.form.toLowerCase());
      }

      return matches;
    });
  }
);


export const Reducer = Slice.reducer;
