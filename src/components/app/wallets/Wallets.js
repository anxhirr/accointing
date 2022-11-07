import React from 'react';
import { useSelector } from 'react-redux';

import AddWalletFormWrapper from './add-wallet/AddWalletFormWrapper';
import DefaultWalletsPage from './DefaultWalletsPage';

function Wallets() {
  const { showModal } = useSelector((state) => state.addWallet);
  return (
    <>
      <DefaultWalletsPage />
      {showModal && <AddWalletFormWrapper />}
    </>
  );
}

export default Wallets;
