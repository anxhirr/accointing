import React, { useState } from 'react';
import styles from './Auth.module.css';

import AccointingLogo from '../../images/general/logo-dark.svg';
import Auth from './Auth';

const AuthWrapper = () => {
  const [islogIn, setIsLogin] = useState(true);
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span>
              <img
                className={styles.img}
                src={AccointingLogo}
                alt='Accointing Logo'
              />
            </span>

            <h2>Welcome</h2>
            <p>
              {islogIn ? 'Log in' : 'Sign Up'} to ACCOINTING to continue to
              Accointing.
            </p>
          </header>
          <Auth islogIn={islogIn} setIsLogin={setIsLogin} />
        </div>
      </main>
    </div>
  );
};

export default AuthWrapper;
