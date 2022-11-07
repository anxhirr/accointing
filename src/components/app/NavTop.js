import React from 'react';
import styles from './NavTop.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UserProfile from './helpers/UserProfile';

function Header({ headerTxt, collapsed }) {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <header className={`${styles.header} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.content}>
        <h5>{headerTxt}</h5>
        <Link className={styles.profile} onClick={handleShow}>
          <p>User</p>
          {show && <UserProfile />}
        </Link>
      </div>
    </header>
  );
}

export default Header;
