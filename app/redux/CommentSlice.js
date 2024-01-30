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
// get post comments
export const getComments = createAsyncThunk(
  "comment/get",
  async (postId, thunkAPI) => {
    try {
      const comment = await axios.post("/api/getcomment", {
        postId: postId,
      });
      if (comment.data.status === 200) {
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
// delete comment from post
export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (id, thunkAPI) => {
    try {
      const comment = await axios.post("/api/deletecomment", {
        commentId: id,
      });
      if (comment.data.status === 200) {
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
    // get post comments
    builder
      .addCase(getComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // delete comment from post
    builder
      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default CommentSlice.reducer;
