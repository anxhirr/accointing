import React, { useState } from 'react';
import styles from './NavLeft.module.css';
import { NavLink } from 'react-router-dom';

import Logo from '../../images/general/logo-dark.svg';
import { ReactComponent as Collapse } from '../../images/portfolio/collapse.svg';
import { ReactComponent as Collapsed } from '../../images/portfolio/collapsed.svg';
import { ReactComponent as Graph } from '../../images/general/graph.svg';
import { ReactComponent as Wallet } from '../../images/general/wallet.svg';
import { ReactComponent as Transactions } from '../../images/general/transactions.svg';
import { ReactComponent as Settings } from '../../images/general/settings.svg';

function NavLeft({ collapsed, setCollapsed }) {
  return (
    <div className={`${styles.container} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logo}>
        <a>
          <img src={Logo} />
        </a>
      </div>
      <button
        onClick={() => setCollapsed((prev) => !prev)}
        className={`btn ${styles.collapse}`}
      >
        {collapsed ? <Collapsed /> : <Collapse />}
      </button>
      <div>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to='./portfolio'
          >
            <Graph />
            {!collapsed && <span>Portfolio</span>}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to='./wallets'
          >
            <Wallet />
            {!collapsed && <span>Wallets</span>}
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to='./transactions'
          >
            <Transactions />
            {!collapsed && <span>Transactions</span>}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to='./settings'
          >
            <Settings />
            {!collapsed && <span>Settings</span>}
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavLeft;
