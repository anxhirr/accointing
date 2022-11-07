import { createSlice } from '@reduxjs/toolkit';

const initialWalletState = {
  hasWallet: false,
  selectedWalletName: '',
  selectedWalletImg: '',
  type: '',
  date: '',
  amount: '',
  currency: '',
  fee: '',
  transactionId: '',
  classification: '',
  comments: '',
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialWalletState,
  reducers: {
    setHasWallet: (state, action) => {
      state.hasWallet = action.payload;
    },
    setSelectedWalletNameAndImg: (state, action) => {
      state.hasWallet = true;
      state.selectedWalletName = action.payload.name;
      state.selectedWalletImg = action.payload.img;
    },
    addWalletData: (state, action) => {
      state.type = action.payload.type;
      state.date = action.payload.date;
      state.amount = action.payload.amount;
      state.currency = action.payload.currency;
      state.fee = action.payload.fee;
      state.transactionId = action.payload.transactionId;
      state.classification = action.payload.classification;
      state.comments = action.payload.comments;
    },
  },
});

export const walletActions = walletSlice.actions;
export default walletSlice.reducer;
