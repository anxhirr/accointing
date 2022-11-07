import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { RiEarthFill } from 'react-icons/ri';
import AccointingLogo from '../../images/general/accointing-logo.png';
import BlackBtn from '../../custom/Btn';

function HomeNavbar() {
  return (
    <header className={styles.header}>
      <div className={`${styles.navbar} container`}>
        <div className={` navbar ${styles['flex-space']}`}>
          <div className={styles.logo}>
            <img className={styles.logo} src={AccointingLogo} />
          </div>
          <div>
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
          </div>
          <div className={`${styles['log-sign-in']} ${styles['flex-space']}`}>
            <div>
              <Link to='app/portfolio'>
                <button className={styles.btn}>Log In</button>
              </Link>
            </div>
            <div>
              <Link to='/auth'>
                <BlackBtn text='Sign up' />
              </Link>
            </div>
            <div className={`${styles.globe} ${styles.btn} `}>
              <RiEarthFill />
              <AiOutlineArrowDown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeNavbar;
