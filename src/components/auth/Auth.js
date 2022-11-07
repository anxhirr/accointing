import React, { useState } from 'react';
import styles from './Auth.module.css';
import AccointingLogo from '../../images/general/logo-dark.svg';
import BlackBtn from '../../custom/Btn';
import { Link } from 'react-router-dom';

function Auth() {
  const [logIn, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {};

  const handleLogin = (e) => {
    e.preventDefault();
  };

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
              {logIn ? 'Log in' : 'Sign Up'} to ACCOINTING to continue to
              Accointing.
            </p>
          </header>
          <form className={styles.form}>
            <div className={styles.input}>
              <input onChange={(e) => setEmail(e.target.value)} value={email} />
              <label className={styles.label}>
                <div className={styles.text}>Email Address</div>
              </label>
            </div>
            <div className={styles.input}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label className={styles.label}>
                <div className={styles.text}>Password</div>
              </label>
            </div>
            {logIn && (
              <div className={styles.forgot}>
                <Link>Forgot Password?</Link>
              </div>
            )}

            <div className={styles['black-btn-container']}>
              <BlackBtn
                classN={styles.blackbtn}
                onClick={handleSignup}
                text={logIn ? 'Log in' : 'Sign Up'}
              />
            </div>

            <div className='flex-start'>
              {logIn && (
                <>
                  <p>Don't have an account? </p>
                  <button
                    className={`btn ${styles.underline}`}
                    onClick={() => setLogin(false)}
                  >
                    Sign up
                  </button>
                </>
              )}
              {!logIn && (
                <>
                  <p>Already have an account?</p>
                  <button
                    className={`btn ${styles.underline}`}
                    onClick={() => setLogin(true)}
                  >
                    Log in
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Auth;
