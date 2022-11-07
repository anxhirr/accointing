import React from 'react';
import styles from './GraphPortfolio.module.css';

import DemoGraph from '../../../images/portfolio/demo-graph.png';
import BlackBtn from '../../../custom/Btn';

const GraphPortfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.header}>
          <li>HOLDINGS</li>
          <li>PRICE</li>
          <li>NET PROFITS</li>
        </ul>
        <div className={styles.main}>
          <div className={styles['graph-container']}>
            <ul className={styles.days}>
              <li>7d</li>
              <li>1m</li>
              <li>3m</li>
              <li>1y</li>
              <li>YTD</li>
              <li>Total</li>
            </ul>
            <div className={styles.graph}>
              <span>
                <img src={DemoGraph} />
              </span>
              <BlackBtn text='+Add data' />
            </div>
          </div>
          <div className={styles.performance}>
            <div>
              <strong>Your 24h Performance vs. Others</strong>
            </div>
            <div>
              <p>Add data to your portfolio to find out how you perform</p>
              <div># of Investors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphPortfolio;
