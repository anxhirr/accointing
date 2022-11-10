import React from 'react';
import Btn from '../../../custom/Btn';
import styles from './Join.module.css';

function Join() {
  return (
    <div className={styles.container}>
      <h2>One Platform for all your Crypto Tax needs</h2>
      <div className={styles['btns']}>
        <Btn text='Sign up for free' />
        <Btn classN={styles['btn-white']} text='Subscribe'></Btn>
      </div>
    </div>
  );
}

export default Join;
