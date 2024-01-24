import { configureStore } from "@reduxjs/toolkit";
import UserSignupLoginSlice from "./UserSignupLoginSlice";
import PostSlice from "./PostSlice";

export const store = configureStore({
  reducer: {
    user: UserSignupLoginSlice,
    post: PostSlice,
  },
});
