import { Routes, Route } from 'react-router-dom';

import styles from './Application.module.css';
import NavLeft from './NavLeft';
import Portfolio from './portfolio/Portfolio';
import Settings from './Settings';
import NavTop from './NavTop';
import Transactions from './Transactions';
import Wallets from './wallets/Wallets';
import { useState } from 'react';

function Appp() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.app}>
      <NavLeft collapsed={collapsed} setCollapsed={setCollapsed} />
      <NavTop collapsed={collapsed} headerTxt='Portfolio' />
      <main
        className={`${styles.container} ${collapsed ? styles.collapsed : ''}`}
      >
        <div className={styles.content}>
          <Routes>
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/wallets/*' element={<Wallets />} />
            <Route path='/transactions' element={<Transactions />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default Appp;
