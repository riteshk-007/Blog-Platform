import { configureStore } from "@reduxjs/toolkit";
import UserSignupLoginSlice from "./UserSignupLoginSlice";

export const store = configureStore({
  reducer: {
    user: UserSignupLoginSlice,
  },
});
