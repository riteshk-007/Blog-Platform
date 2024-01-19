import { createSlice } from "@reduxjs/toolkit";

export const UserSignupLoginSlice = createSlice({
    name: 'user',
    initialState: { entity: {}, loading: 'idle', error: null },
    reducers: {},
})
export default UserSignupLoginSlice.reducer;