import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuth, signOut } from "firebase/auth";

const API_KEY = "AIzaSyCkxPo19SKC6V2-8LbTZ2GtxLW5CqWoePs";
axios.defaults.baseURL =
  "https://console.firebase.google.com/project/dbproject-68bad/";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const res = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]`, // замените [API_KEY] на ваш ключ
        {
          email: newUser.email,
          password: newUser.password,
          returnSecureToken: true,
        }
      );
      setAuthHeader(res.data.idToken); // используйте idToken, возвращаемый Firebase, вместо token
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// export const logIn = createAsyncThunk(
//   "auth/login",
//   async (userInfo, thunkAPI) => {
//     try {
//       const res = await axios.post("/users/login", userInfo);
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {      
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
      const res = await axios.post(url, {
        email: userInfo.email,
        password: userInfo.password,
        returnSecureToken: true,
      });
      setAuthHeader(res.data.idToken); // Устанавливаем заголовок с idToken
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
//   try {
//     await axios.post("/users/logout");
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });



export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const auth = getAuth(); // Инициализируем Firebase Auth
  try {
    await signOut(auth); // Выполняем выход из Firebase
    clearAuthHeader(); // Удаляем заголовок авторизации или токен из хранилища
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    const res = await axios.get("/users/current");   
    return res.data;
  },
  {
    condition(_, thunkAPI) {
      const reduxState = thunkAPI.getState();
      
      return reduxState.auth.token !== null;
    },
  }
);