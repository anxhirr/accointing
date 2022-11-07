import React from 'react';
import styles from './AllocationPortfolio.module.css';
import { Link, useNavigate } from 'react-router-dom';

import Wallet from '../../../images/portfolio/wallet.png';
import Btn from '../../../custom/Btn';

const AllocationPortfolio = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['allocation-content']}>
      <div className={styles.allocation}>
        <h4 className={styles.h4}>Portfolio allocation</h4>
        <div className={styles.circle}>
          <p className={styles['allocaion-amount']}>$0.00</p>
        </div>
      </div>
      <div className={styles.wallet}>
        <ul>
          <li>WALLET</li>
          <li>COINS</li>
          <li>ALLOCATION</li>
        </ul>
        <div className={styles['wallet-data']}>
          <div>
            <img className={styles['wallet-img']} src={Wallet} />
            <Link to='../wallets'>
              <Btn
                classN={styles['wallet-btn']}
                text='Add Wallet or Exchange'
              />{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationPortfolio;
