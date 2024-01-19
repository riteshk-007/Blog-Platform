import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create User
export const createUser = createAsyncThunk(
  "user/createUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/api/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
      });
      if (response.data.status === 201) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// login user
export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/api/login", {
        email: user.email,
        password: user.password,
      });
      if (response.data.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// user slice
export const UserSignupLoginSlice = createSlice({
  name: "user",
  initialState: { entity: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    // create a new user
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // login user
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default UserSignupLoginSlice.reducer;
