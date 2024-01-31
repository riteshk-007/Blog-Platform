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
// update user email
export const updateUserEmail = createAsyncThunk(
  "post/updateUserEmail",
  async (data, thunkAPI) => {
    try {
      const userEmail = await axios.patch("/api/useremail", {
        id: data?.id,
        email: data?.email,
      });
      if (userEmail.status === 200) {
        return userEmail.data;
      } else {
        return thunkAPI.rejectWithValue(userEmail.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// update Title
export const updateTitle = createAsyncThunk(
  "post/updateTitle",
  async (data, thunkAPI) => {
    try {
      const postTitle = await axios.patch("/api/updateTitle", {
        id: data?.id,
        title: data?.title,
      });
      if (postTitle.status === 200) {
        return postTitle.data;
      } else {
        return thunkAPI.rejectWithValue(postTitle.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// update Post para
export const updatePostParagraph = createAsyncThunk(
  "post/updatePostParagraph",
  async (data, thunkAPI) => {
    try {
      const postParagraph = await axios.patch("/api/updatePara", {
        id: data?.id,
        content: data?.content,
      });
      if (postParagraph.status === 200) {
        return postParagraph.data;
      } else {
        return thunkAPI.rejectWithValue(postParagraph.data);
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
    // update user email
    builder
      .addCase(updateUserEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUserEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // update Title
    builder
      .addCase(updateTitle.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // update Post para
    builder
      .addCase(updatePostParagraph.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePostParagraph.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updatePostParagraph.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default updateSlice.reducer;
