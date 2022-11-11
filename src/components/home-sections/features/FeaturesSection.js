import React from 'react';
import styles from './FeaturesSection.module.css';

import Charts from '../../../images/features/charts.svg';
import Markets from '../../../images/features/markets.svg';
import Providers from '../../../images/features/providers.svg';
import Reports from '../../../images/features/reportsDefault.svg';

const FeaturesSection = () => {
  return (
    <section className='container'>
      <h4 className={styles.h4}>
        How ACCOINTING.com helps you track and file your taxes, from Bitcoin to
        DeFi to NFTs, and everything in between
      </h4>

      <div className={styles.features}>
        <span>
          <img src={Providers} />
        </span>
        <div>
          <h2>Instantly import all your transactions</h2>
          <p>
            We've implemented over 300 integrations so far to help you
            automatically calculate your gains and losses.
          </p>
        </div>

        <div>
          <h2>Review your crypto portfolio and obtain valuable insights</h2>
          <p>
            Analyze your performance and deep-dive on your transaction history
            across the cryptoverse, all in real-time.
          </p>
        </div>
        <span>
          <img src={Charts} />
        </span>

        <span>
          <img src={Reports} />
        </span>
        <div>
          <h2>Easily file all your crypto taxes</h2>
          <p>
            It only takes 5 clicks to get your crypto tax reports, available in
            FIFO, LIFO and HIFO, based on generally accepted crypto tax
            principles around the world.
          </p>
        </div>

        <div>
          <h2>Explore the crypto market and influence the crypto space</h2>
          <p>
            Review the performance of the overall crypto market, set up alerts,
            research trending tokens, and share them through your personalized
            and curated token lists on Twitter.
          </p>
        </div>
        <span>
          <img src={Markets} />
        </span>
      </div>
    </section>
  );
};

export default FeaturesSection;
