import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// update user name
export const updateUserName = createAsyncThunk(
  "post/updateUserName",
  async (data, thunkAPI) => {
    try {
      const userName = await axios.patch("/api/username", {
        id: data?.id,
        name: data?.name,
      });

      if (userName.status === 200) {
        return userName.data;
      } else {
        return thunkAPI.rejectWithValue(userName.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const updateSlice = createSlice({
  name: "update",
  initialState: {
    loading: false,
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserName.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default updateSlice.reducer;
