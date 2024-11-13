import { createSelector, createSlice} from "@reduxjs/toolkit";
import {
  fetchTeachers,
  addTeacher, 
  deleteTeacher
} from "./operations";
import { selectTeachers } from "./selectors";
import { selectNameFilter } from "../filters/selectors";
import { logOut } from "../auth/operations";
const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addTeacher.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteTeacher.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
       
        state.items = [];
        state.loading = false;
        state.error= null;
      });
  },
});

export const visibleTeachers = createSelector(
  [selectTeachers, selectNameFilter],
  (teachers, selectNameFilter) => {
    if (!selectNameFilter) {
      return teachers; // Вернуть всех учителей, если фильтр не указан
    }
    return teachers.filter((teacher) => {
      const filterName = teacher.name
        .toLowerCase()
        .includes(selectNameFilter.toLowerCase());
      const filterNumber = teacher.number.includes(selectNameFilter);
      return filterName || filterNumber;
    });
  }
);

export const teacherReducer = teachersSlice.reducer;
