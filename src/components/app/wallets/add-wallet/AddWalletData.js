import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './AddWalletData.module.css';

import { addWalletActions } from '../../../../store/add-wallet-slice';
import { walletActions } from '../../../../store/wallet-slice';

import AmountCurrencyInput from '../../../../custom/AmountCurrencyInput';
import Btn from '../../../../custom/Btn';

const AddWalletData = () => {
  const dispatch = useDispatch();

  const amountRef = useRef(null);
  // const currencyRef = useRef(null);
  const transactionRef = useRef(null);
  const commentRef = useRef(null);

  const handlePrevBtnClick = () => {
    dispatch(addWalletActions.prevStep());
  };

  const handleSaveClick = (e) => {
    dispatch(addWalletActions.setShowModal(false));
    dispatch(
      walletActions.addWalletData({
        amount: amountRef.current.value,
        // currency: currencyRef.current.value,
        transactionId: transactionRef.current.value,
        comment: commentRef.current.value,
        type: 'deposit',
      })
    );
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.row}>
          <div>
            <label>Type</label>
            <select className='input'>
              <option>Deposit (Receive)</option>
              <option>Withdrawal (Send)</option>
              <option>Order</option>
              <option>Internal</option>
            </select>
          </div>
          <div>
            <label>Receive in</label>
            <input className='input' />
          </div>
          <div>
            <label>Fee (optional)</label>
            <AmountCurrencyInput />
          </div>
          <div>
            <label>Classification (optional)</label>
            <input className='input' />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>Date</label>
            <input className='input' type='date' />
          </div>
          <div>
            <label>Amount</label>
            <AmountCurrencyInput ref={amountRef} />
          </div>
          <div>
            <label>Transaction Id (optional)</label>
            <input ref={transactionRef} className='input' />
          </div>
          <div>
            <label>Comments (optional)</label>
            <input ref={commentRef} className='input' />
          </div>
        </div>
      </div>
      <div className={styles.btns}>
        <Btn
          classN={styles.whiteBtn}
          onClick={handlePrevBtnClick}
          text='Go back'
        />
        <Btn onClick={handleSaveClick} text='Save' />
      </div>
    </>
  );
};

export default AddWalletData;
