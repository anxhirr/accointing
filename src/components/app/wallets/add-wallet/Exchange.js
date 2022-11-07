import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { walletActions } from '../../../../store/wallet-slice';
import { addWalletActions } from '../../../../store/add-wallet-slice';
import styles from './Exchange.module.css';

function Exchange({ imgSrc, name, id }) {
  const dispatch = useDispatch();

  const handleExchangeClick = () => {
    dispatch(walletActions.setHasWallet(true));
    dispatch(
      walletActions.setSelectedWalletNameAndImg({
        name,
        img: imgSrc,
      })
    );
    dispatch(addWalletActions.nextStep());
  };

  return (
    <div onClick={handleExchangeClick} className={styles.container}>
      <Link
        //  to={`./${name.toLowerCase()}/`}
        className={styles.link}
      >
        <img src={imgSrc} />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default Exchange;
