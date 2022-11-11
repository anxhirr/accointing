import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { RiEarthFill } from 'react-icons/ri';
import AccointingLogo from '../../images/general/accointing-logo.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} container`}>
        <ul className={` navbar ${styles['flex-space']}`}>
          <li className={styles.logo}>
            <img className={styles.logo} src={AccointingLogo} />
          </li>
          <li>
            <ul className={`${styles['nav-mid-ul']} ${styles['flex-space']}`}>
              <li>
                <span>Features</span>
                <AiOutlineArrowDown />
              </li>
              <li>
                <span>Exchanges</span>
                <AiOutlineArrowDown />
              </li>
              <li>
                <span>Learn</span>
                <AiOutlineArrowDown />
              </li>
              <li>
                <span>Pricing</span>
              </li>
            </ul>
          </li>
          <li className={`${styles['log-sign-in']} ${styles['flex-space']}`}>
            <div>
              <Link to='/auth/log-in'>
                <button className='btn btn-black'>Log In</button>
              </Link>
            </div>
            <div>
              <Link to='/auth/sign-up'>
                <button className='btn'>Sign Up</button>
              </Link>
            </div>
            <div className={`${styles.globe} ${styles.btn} `}>
              <RiEarthFill />
              <AiOutlineArrowDown />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
