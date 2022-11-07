import React from 'react';
import styles from './Btn.module.css';

function Btn({ text, classN, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${classN}`}>
      {text}
    </button>
  );
}

export default Btn;
