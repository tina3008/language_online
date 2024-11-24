// import { createSlice } from "@reduxjs/toolkit";
// import { logIn, logOut, refreshUser, register } from "./operations";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: {
//       name: null,
//       email: null,
//     },
//     token: localStorage.getItem("token") || null,
//     refreshToken: localStorage.getItem("refreshToken") || null,
//     isLoggedIn: false,
//     isLoading: false,
//     isRefreshing: false,
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.refreshToken = action.payload.refreshToken;
//         state.isLoading = false;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//           state.refreshToken = action.payload.refreshToken;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = {
//           name: null,
//           email: null,
//         };
//         state.token = null;
//         state.refreshToken = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.token = action.payload.token;
//           state.refreshToken = action.payload.refreshToken;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       }),
// });

// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
  refreshToken: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.idToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.idToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;

        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export default authSlice.reducer;