import React from 'react';
import styles from './SelectWallet.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Exchange from './Exchange';

import Blockchain from '../../../../images/exchanges/blockchain.png';
import Binance from '../../../../images/exchanges/binance.png';
import Coinbase from '../../../../images/exchanges/coinbase.png';
import Btc from '../../../../images/exchanges/blockchain.png';
import Eth from '../../../../images/exchanges/eth.png';
import Metamask from '../../../../images/exchanges/metamask.png';

const EXCHANGES = [
  {
    name: 'Binance',
    imgSrc: Binance,
  },
  {
    name: 'Blockchain',
    imgSrc: Blockchain,
  },
  {
    name: 'Bitcoin',
    imgSrc: Btc,
  },
  {
    name: 'Coinbase',
    imgSrc: Coinbase,
  },
  {
    name: 'Eth',
    imgSrc: Eth,
  },
  {
    name: 'Metamask',
    imgSrc: Metamask,
  },
];

function SelectWallet(props) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles['search-container']}>
          <label>Search your wallet or exchange name</label>
          <div>
            <AiOutlineSearch />
            <input placeholder='Eg. Coinbase, Binance, Ftx, Metamask' />
          </div>
        </div>
        <div className={styles.clasify}>
          <ul>
            <li>All</li>
            <li>Exchange</li>
            <li>Wallet</li>
            <li>Service</li>
          </ul>
        </div>
        <div className={styles.exchanges}>
          {EXCHANGES.map((e, i) => {
            return (
              <Exchange
                key={i}
                id={e.id}
                imgSrc={e.imgSrc}
                name={e.name}
                props={props}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SelectWallet;
