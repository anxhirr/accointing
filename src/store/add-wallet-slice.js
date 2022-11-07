import { createSlice } from '@reduxjs/toolkit';

const initialAddWalletState = {
  showModal: false,
  currentStepIndex: 0,
};

const addWalletSlice = createSlice({
  name: 'addWallet',
  initialState: initialAddWalletState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    nextStep: (state) => {
      state.currentStepIndex++;
    },
    prevStep: (state) => {
      state.currentStepIndex--;
    },
  },
});

export const addWalletActions = addWalletSlice.actions;
export default addWalletSlice.reducer;
