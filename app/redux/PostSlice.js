import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create Post
export const createPost = createAsyncThunk(
  "post/create",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/api/post", {
        title: data?.postDetail?.title,
        content: data?.postDetail?.description,
        userId: data?.postDetail?.userId,
        image: data?.postDetail?.image,
      });
      if (response.data.status === 201) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);

export const PostSlice = createSlice({
  name: "post",
  initialState: { post: {}, loading: false, error: null, show: false },
  reducers: {
    showPost: (state) => {
      state.show = true;
    },
    hidePost: (state) => {
      state.show = false;
    },
  },
  extraReducers: (builder) => {
    // create a new post
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { showPost, hidePost } = PostSlice.actions;
export default PostSlice.reducer;
