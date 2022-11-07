import React, { useRef, useState } from 'react';
import styles from './Settings.module.css';
import BlackBtn from '../../custom/Btn';
import { useSelector, useDispatch } from 'react-redux';
import { settingsActions } from '../../store/settings-slice';

function Settings() {
  const dispatch = useDispatch();
  const { firstName, lastName, email } = useSelector((state) => state.settings);

  const [isDisabled, setIsDisabled] = useState(true);
  const active = !isDisabled ? styles['active-btn'] : '';

  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const emailRef = useRef(null);

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      settingsActions.updateSettings({
        firstName: firstRef.current.value,
        lastName: lastRef.current.value,
        email: emailRef.current.value,
      })
    );

    setIsDisabled(true);
  };

  const handleInputChange = (e, el) => {
    if (e.target.value !== el) {
      setIsDisabled(false);
    }
    if (e.target.value === el) {
      setIsDisabled(true);
    }
  };

  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <div className={styles.header}>
          <h2 className={styles.h2}>My personal information</h2>
          <button
            onClick={handleSave}
            type='submit'
            className={`${styles['submit-btn']} ${active}`}
          >
            Save Changes
          </button>
        </div>
        <div className={styles.personal}>
          <div className={styles.first}>
            <label>First Name</label>
            <input
              ref={firstRef}
              onChange={(e) => handleInputChange(e, firstName)}
              defaultValue={firstName}
              className='input'
            />
          </div>
          <div className={styles.last}>
            <label>Last Name</label>
            <input
              ref={lastRef}
              onChange={(e) => handleInputChange(e, lastName)}
              defaultValue={lastName}
              className='input'
            />
          </div>
          <div className={styles.email}>
            <label>Email</label>
            <input
              ref={emailRef}
              onChange={(e) => handleInputChange(e, email)}
              defaultValue={email}
              className='input'
            />
          </div>
        </div>

        <h2 className={styles.h2}>Settings</h2>
        <div className={styles.settings}>
          <div className={styles.currency}>
            <label>Currency to display</label>
            <select className='select'>
              <option>EUR</option>
              <option>USD</option>
              <option>CAD</option>
              <option>AUD</option>
              <option>GBP</option>
            </select>
          </div>

          <div className={styles.language}>
            <label>Default language</label>
            <select className='select'>
              <option>English</option>
              <option>Deautch</option>
            </select>
          </div>
          <div className={styles.password}>
            <label>Change Password</label>
            <BlackBtn text='Send Reset Link' />
          </div>
        </div>
      </form>
      <div className={styles.delete}>
        <div>
          <h2>Clear Data</h2>
          <p>Clear all your transaction data and gain calculation histories</p>
          <button className='btn btn-warning'>Clear Data</button>
        </div>
        <div>
          <h2>Delete account</h2>
          <p>Delete your user account on ACCOINTING.com</p>
          <button className='btn btn-warning'>Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
