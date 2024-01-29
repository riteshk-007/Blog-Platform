import { createSlice } from "@reduxjs/toolkit";

export const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
});
export default CommentSlice.reducer;
