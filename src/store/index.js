import { configureStore } from '@reduxjs/toolkit';

import settingsReducer from './settings-slice';
import walletReducer from './wallet-slice';
import addWalletMultiStepReducer from './add-wallet-slice';
import authSliceReducer from './auth-slice';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    settings: settingsReducer,
    addWallet: addWalletMultiStepReducer,
    auth: authSliceReducer,
  },
});

export default store;
