import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchTeachers, addTeacher, deleteTeacher } from "./operations";
import { selectTeachers } from "./selectors";
import { selectFilter } from "./selectors";
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
        console.log("Fetched teachers:", action.payload);
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.map((teacher, index) => ({
          id: teacher.id || index, // Генерируем id, если отсутствует
          ...teacher,
        }));
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
        state.error = null;
      });
  },
});
// export const visibleTeachers = createSelector(
//   [selectTeachers, selectFilter],
//   (teachers, filters) => {
//     if (!filters || !filters.values) {
//       return teachers;
//     }
//     return teachers.filter((teacher) => {
//       const { levels, languages, price_per_hour } = filters.values;
//       let matches = true;
//       if (levels) {
//         matches = matches && teacher.levels.includes(levels);
//       }
//       if (languages) {
//         matches = matches && teacher.languages.includes(languages);
//       }
//       if (price_per_hour) {
//         matches = matches && teacher.price_per_hour == price_per_hour;
//       }
//       return matches;
//     });
//   }
// );

// export const visibleTeachers = createSelector(
//   [selectTeachers, selectFilter, (state) => state.filters.favorites],
//   (teachers, filters, favorites) => {
//     let filteredTeachers = teachers;

 
//     if (filters && filters.values) {
//       const { levels, languages, price_per_hour } = filters.values;
//       filteredTeachers = filteredTeachers.filter((teacher) => {
//         let matches = true;
//         if (levels) {
//           matches = matches && teacher.levels.includes(levels);
//         }
//         if (languages) {
//           matches = matches && teacher.languages.includes(languages);
//         }
//         if (price_per_hour) {
//           matches = matches && teacher.price_per_hour == price_per_hour;
//         }
//         return matches;
//       });
//     }
 
//     if (favorites.length > 0) {
//       filteredTeachers = filteredTeachers.filter((teacher) =>
//         favorites.includes(teacher.id)
//       );
//     }

//     return filteredTeachers;
//   }
// );

export const visibleTeachers = createSelector(
  [selectTeachers, selectFilter],
  (teachers, filters) => {
    console.log("Teachers in state:", teachers);
    console.log("Filters:", filters);

    if (!filters || !filters.values) {
      return teachers;
    }

    return teachers.filter((teacher) => {
      const { levels, languages, price_per_hour } = filters.values;
      let matches = true;

      if (levels) {
        matches = matches && teacher.levels.includes(levels);
      }

      if (languages) {
        matches = matches && teacher.languages.includes(languages);
      }

      if (price_per_hour) {
        matches = matches && teacher.price_per_hour == price_per_hour;
      }

      return matches;
    });
  }
);
export const teacherReducer = teachersSlice.reducer;
