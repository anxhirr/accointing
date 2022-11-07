import React from 'react';
import styles from './ImportTransactions.module.css';
import { useNavigate } from 'react-router-dom';

import Automatic from '../../../../images/add-wallet-import-options/automatic.png';
import File from '../../../../images/add-wallet-import-options/file.png';
import Template from '../../../../images/add-wallet-import-options/template.png';
import Manually from '../../../../images/add-wallet-import-options/manually.png';

import { useDispatch } from 'react-redux';
import { addWalletActions } from '../../../../store/add-wallet-slice';

const ImportTransactions = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleManualDataClick = () => {};

  const handleOptionClick = () => {
    dispatch(addWalletActions.nextStep());
    // navigate('/app/wallets/add-wallet/:selectedWalletName/manually/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div
          onClick={handleOptionClick}
          className={`${styles.option} ${styles.automaticOption}`}
        >
          <span>
            <img src={Automatic} />
          </span>
          <div>
            <h3>Automatic</h3>
            <p>Wallet address</p>
          </div>
          <span className={styles.recommended}>Recommended</span>
        </div>
        <div className={styles.other}>
          <p className={styles.p}>Other ways to import</p>
        </div>
        <div onClick={handleOptionClick} className={styles.option}>
          <span>
            <img src={File} />
          </span>
          <div>
            <h3>File import</h3>
            <p>Upload (csv/xlsx)</p>
          </div>
        </div>
        <div onClick={handleOptionClick} className={styles.option}>
          <span>
            <img src={Template} />
          </span>
          <div>
            <h3>Accointing's template</h3>
            <p>Download out template, fill and upload your data</p>
          </div>
        </div>
        <div onClick={handleOptionClick} className={styles.option}>
          <span>
            <img src={Manually} />
          </span>
          <div>
            <h3>Type data manually </h3>
            <p>Fill a form</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportTransactions;
