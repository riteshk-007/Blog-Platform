import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// create comment on post
export const createComment = createAsyncThunk(
  "comment/create",
  async (data, thunkAPI) => {
    try {
      const comment = await axios.post("/api/create", {
        content: data?.comment.trim(),
        userId: data?.userId,
        postId: data?.postId,
      });
      if (comment.data.status === 201) {
        return comment.data.data;
      } else {
        return thunkAPI.rejectWithValue(comment.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);
export const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // create a new comment on a post
    builder
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(createComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default CommentSlice.reducer;
