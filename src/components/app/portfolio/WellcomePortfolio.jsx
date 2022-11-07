import React from 'react';
import styles from './WellcomePortfolio.module.css';
import { Link } from 'react-router-dom';

import Person from '../../../images/portfolio/person.svg';
import GreenTick from '../../../images/portfolio/green-tick.png';

const WellcomePortfolio = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>Welcome! Start tracking your portfolio now</h1>
      <div className={styles.add}>
        <Link to='../wallets' className={styles.btn}>
          Add a Wallet or Exchange
        </Link>
      </div>
      <div className={styles.account}>
        <span>
          <img src={GreenTick} />
        </span>
        <div>
          <h2>Create your account</h2>
          <p>Free import for unlimited data</p>
        </div>
      </div>
      <div className={styles.connect}>
        <h2>Connect a Wallet or Exchange</h2>
        <p>Autosync it, or add a manual transaction</p>
      </div>
      <div className={styles.person}>
        <img src={Person} />
      </div>
    </div>
  );
};

export default WellcomePortfolio;
