import { configureStore } from '@reduxjs/toolkit';

import settingsReducer from './settings-slice';
import walletReducer from './wallet-slice';
import addWalletMultiStepReducer from './add-wallet-slice';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    settings: settingsReducer,
    addWallet: addWalletMultiStepReducer,
  },
});

export default store;
