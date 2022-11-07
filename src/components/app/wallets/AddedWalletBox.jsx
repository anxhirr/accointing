import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AddedWalletBox.module.css';

import { walletActions } from '../../../store/wallet-slice';
import { addWalletActions } from '../../../store/add-wallet-slice';

import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';

const AddedWalletBox = () => {
  const dispatch = useDispatch();
  const { selectedWalletName, selectedWalletImg, type, amount, currency } =
    useSelector((state) => state.wallet);

  const handleDeleteIconClick = () => {
    dispatch(walletActions.setHasWallet(false));
  };

  const handleEditIconClick = () => {
    dispatch(addWalletActions.setShowModal(true));
  };

  return (
    <div className={styles.container}>
      <div className={styles.edit}>
        <MdEdit onClick={handleEditIconClick} />
        <MdDelete onClick={handleDeleteIconClick} />
      </div>
      <div>
        <div className={styles.name}>
          <span>
            <img src={selectedWalletImg} />
          </span>
          <h2>{selectedWalletName}</h2>
        </div>
        <div className={styles.amount}>{amount}</div>
      </div>
      <div>
        <p>1 coin</p>
        <AiFillCaretDown />
      </div>
      <div>
        <p>Manually imported</p>
        <div>
          <span>Add Transaction</span>
          <button onClick={handleEditIconClick} className={`btn ${styles.btn}`}>
            Add Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedWalletBox;
