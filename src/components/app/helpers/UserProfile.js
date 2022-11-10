import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserProfile.module.css';
import { ReactComponent as Language } from '../../../images/portfolio/language.svg';
import { ReactComponent as ProfileSettings } from '../../../images/portfolio/profile-settings.svg';
import { ReactComponent as Logout } from '../../../images/portfolio/logout.svg';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../../store/auth-slice';

function UserProfile() {
  const dispatch = useDispatch();
  const stopPropagation = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleLogout = () => {
    dispatch(AuthActions.logout());
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
          <Link onClick={handleLogout} to='../'>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;
