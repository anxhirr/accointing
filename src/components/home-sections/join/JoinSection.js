import React from 'react';
import { Link } from 'react-router-dom';
import styles from './JoinSection.module.css';

function JoinSection() {
  return (
    <section className={styles.join}>
      <h2 className={styles.h2}>One Platform for all your Crypto Tax needs</h2>
      <div className={`container ${styles.btns}`}>
        <Link to='/auth/sign-up' className='btn btn-black'>
          Sign up for free
        </Link>
        <Link to='./' className='btn btn-transparent'>
          Subscribe
        </Link>
      </div>
    </section>
  );
}

export default JoinSection;
