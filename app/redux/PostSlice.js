import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "post",
  initialState: { post: {}, loading: false, error: null, show: false },
  reducers: {
    setPost: (state) => {
      state.show = true;
    },
    hidePost: (state) => {
      state.show = false;
    },
  },
});
export default PostSlice.reducer;
