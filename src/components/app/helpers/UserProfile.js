import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserProfile.module.css';
import { ReactComponent as Language } from '../../../images/portfolio/language.svg';
import { ReactComponent as ProfileSettings } from '../../../images/portfolio/profile-settings.svg';
import { ReactComponent as Logout } from '../../../images/portfolio/logout.svg';

function UserProfile() {
  const stopPropagation = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <span>Anxhi Rroshi</span>
        </li>
        <hr></hr>
        <li className={styles.language} onClick={stopPropagation}>
          <div>
            <Language />
          </div>
          <select className={styles.select}>
            <option>English</option>
            <option>German</option>
          </select>
        </li>
        <li>
          <div>
            <ProfileSettings />
          </div>
          <Link>Profile Setting</Link>
        </li>
        <hr></hr>
        <li className={styles.logout}>
          <div>
            <Logout />
          </div>
          <Link to='../'>Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;
