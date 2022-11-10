import React from 'react';
import styles from './Features.module.css';
import Feature from './Feature';
import Charts from '../../../images/features/charts.svg';
import Markets from '../../../images/features/markets.svg';
import Providers from '../../../images/features/providers.svg';
import Reports from '../../../images/features/reportsDefault.svg';

const header1 = 'Instantly import all your transactions';
const paragraph1 =
  "We've implemented over 300 integrations so far to help you automatically calculate your gains and losses.";
const header2 = 'Review your crypto portfolio and obtain valuable insights';
const paragraph2 =
  'Analyze your performance and deep-dive on your transaction history across the cryptoverse, all in real-time.';
const header3 = 'Easily file all your crypto taxes';
const paragraph3 =
  'It only takes 5 clicks to get your crypto tax reports, available in FIFO, LIFO and HIFO, based on generally accepted crypto tax principles around the world.';
const header4 = 'Explore the crypto market and influence the crypto space';
const paragraph4 =
  'Review the performance of the overall crypto market, set up alerts, research trending tokens, and share them through your personalized and curated token lists on Twitter.';

function Features() {
  return (
    <div className={`${styles.features} container `}>
      <h4>
        How ACCOINTING.com helps you track and file your taxes, from Bitcoin to
        DeFi to NFTs, and everything in between
      </h4>
      <Feature
        img={Providers}
        header={header1}
        paragraph={paragraph1}
        left={true}
      />
      <Feature img={Charts} header={header2} paragraph={paragraph2} />
      <Feature
        img={Reports}
        header={header3}
        paragraph={paragraph3}
        left={true}
      />
      <Feature img={Markets} header={header4} paragraph={paragraph4} />
    </div>
  );
}

export default Features;
