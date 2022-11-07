import React from 'react';
import styles from './AmountCurrencyInput.module.css';

import { AiOutlineSearch } from 'react-icons/ai';

const AmountCurrencyInput = React.forwardRef((_, ref) => {
  console.log(ref);
  return (
    <div className={styles.container}>
      <div className={styles.amount}>
        <input ref={ref} placeholder='00.00' type='number' className='input' />
      </div>
      <div className={styles.currency}>
        <input
          // ref={ref.currencyRef}
          placeholder='Currency'
          className='input'
          type='search'
        />
        <span>
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  );
});

export default AmountCurrencyInput;
