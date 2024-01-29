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
// login user details
export const getUser = createAsyncThunk("user/getUser", async (thunkAPI) => {
  try {
    const response = await axios.get("/api/login");
    if (response.data.status === 200) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
// logout user
export const logoutUser = createAsyncThunk("user/logout", async (thunkAPI) => {
  try {
    const response = await axios.get("/api/logout");
    if (response.data.status === 200) {
      return response.data;
    } else {
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// delete User and related posts
export const deleteUserPost = createAsyncThunk(
  "post/deleteUserPost",
  async (id, thunkAPI) => {
    try {
      // const dispatch = useDispatch();
      const user = await axios.post("/api/delete", {
        userId: id,
      });
      if (user.data.status === 200) {
        return user.data;
      } else {
        return thunkAPI.rejectWithValue(user.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);
// user slice
export const UserSignupLoginSlice = createSlice({
  name: "user",
  initialState: {
    entity: {},
    loading: false,
    error: null,
    user: {},
    show: false,
  },
  reducers: {
    ShowLoginSign: (state) => {
      state.show = true;
    },
    HideLoginSign: (state) => {
      state.show = false;
    },
  },
  extraReducers: (builder) => {
    // create a new user
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
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
    // get user details
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // logout user
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // delete User and related posts
    builder
      .addCase(deleteUserPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserPost.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
      })
      .addCase(deleteUserPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { ShowLoginSign, HideLoginSign } = UserSignupLoginSlice.actions;
export default UserSignupLoginSlice.reducer;
