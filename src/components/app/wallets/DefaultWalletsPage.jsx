import React from 'react';
import styles from './DefaultWalletsPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addWalletActions } from '../../../store/add-wallet-slice';

import { Link } from 'react-router-dom';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import AddedWalletBox from './AddedWalletBox';

const DefaultWalletsPage = () => {
  const dispatch = useDispatch();
  const showAddedWalletBox = useSelector((state) => state.wallet.hasWallet);

  const handleAddWalletClick = () => {
    dispatch(addWalletActions.setShowModal(true));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wallets}>
        <div className={styles.header}>
          <h2 className={styles.h2}>Wallets</h2>
          <Link className={styles.addnew} onClick={handleAddWalletClick}>
            <AiOutlinePlusCircle />
            <span>Add new</span>
          </Link>
        </div>
        <p>Nothing connected yet...</p>
        <div className={styles['added-wallets-container']}>
          {showAddedWalletBox && <AddedWalletBox />}
        </div>
      </div>
      <div className={styles.exchanges}>
        <div className={styles.header}>
          <h2 className={styles.h2}>Exchanges</h2>
          <Link className={styles.addnew} onClick={handleAddWalletClick}>
            <AiOutlinePlusCircle />
            <span>Add new</span>
          </Link>
        </div>
        <p>Nothing connected yet...</p>
      </div>
      <div className={styles.services}>
        <div className={styles.header}>
          <h2 className={styles.h2}>Services</h2>
          <Link className={styles.addnew} onClick={handleAddWalletClick}>
            <AiOutlinePlusCircle />
            <span>Add new</span>
          </Link>
        </div>
        <p>Nothing connected yet...</p>
      </div>
    </div>
  );
};

export default DefaultWalletsPage;
