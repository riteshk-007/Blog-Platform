import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const updateSlice = createSlice({
  name: "update",
  initialState: {
    loading: false,
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {},
});
export default updateSlice.reducer;
