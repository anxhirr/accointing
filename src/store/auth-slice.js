import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
