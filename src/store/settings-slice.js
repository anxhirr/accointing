import { createSlice } from '@reduxjs/toolkit';

const initialSettingsState = {
  firstName: '',
  lastName: '',
  email: '',
  currency: '',
  language: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialSettingsState,
  reducers: {
    updateSettings(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.currency = action.payload.currency;
      state.language = action.payload.language;
    },
  },
});

export const settingsActions = settingsSlice.actions;
export default settingsSlice.reducer;
