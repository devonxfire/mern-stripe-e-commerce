import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signinSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload;
    },
    signinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signoutSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.currentUser = null;
    },
    signoutFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signinStart,
  signinSuccess,
  signinFailure,
  signoutStart,
  signoutSuccess,
  signoutFailure,
} = userSlice.actions;
export default userSlice.reducer;
