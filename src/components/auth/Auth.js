import React, { useState } from 'react';
import styles from './Auth.module.css';

import BlackBtn from '../../custom/Btn';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../../store/auth-slice';
import AuthWrapper from './AuthWrapper';

function Auth({ islogIn, setIsLogin }) {
  // const [islogIn, setIsLogin] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:';

    islogIn
      ? (url +=
          'signInWithPassword?key=AIzaSyDiws-II-792XL4KpJp73lH_6amejcrgx8')
      : (url += 'signUp?key=AIzaSyDiws-II-792XL4KpJp73lH_6amejcrgx8');

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData?.error?.message;
        throw new Error(errorMessage);
      }

      const resData = await res.json();
      const token = resData.idToken;

      dispatch(AuthActions.login(token));
      navigate('/app/portfolio');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <input
          onChange={(e) => setEnteredEmail(e.target.value)}
          value={enteredEmail}
        />
        <label className={styles.label}>
          <div className={styles.text}>Email Address</div>
        </label>
      </div>
      <div className={styles.input}>
        <input
          onChange={(e) => setEnteredPassword(e.target.value)}
          value={enteredPassword}
        />
        <label className={styles.label}>
          <div className={styles.text}>Password</div>
        </label>
      </div>
      {islogIn && (
        <div className={styles.forgot}>
          <Link>Forgot Password?</Link>
        </div>
      )}

      <div className={styles['black-btn-container']}>
        <BlackBtn
          classN={styles.blackbtn}
          onClick={handleSubmit}
          text={islogIn ? 'Log in' : 'Sign Up'}
        />
      </div>

      <div className='flex-start'>
        {islogIn && (
          <>
            <p>Don't have an account? </p>
            <button
              className={`btn ${styles.underline}`}
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>
          </>
        )}
        {!islogIn && (
          <>
            <p>Already have an account?</p>
            <button
              className={`btn ${styles.underline}`}
              onClick={() => setIsLogin(true)}
            >
              Log in
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default Auth;
