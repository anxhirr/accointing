import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SponsorSection.module.css';

import Bitcoin2go from '../../../images/sponsors/bitcoin2go.webp';
import Cnbs from '../../../images/sponsors/cnbc.webp';
import Cointelegraph from '../../../images/sponsors/cointelegraph.webp';
import Bloomberg from '../../../images/sponsors/bloomberg.png';
import Forbes from '../../../images/sponsors/forbes.png';
import Coindesk from '../../../images/sponsors/coindesk.webp';

const sponsors = [Bitcoin2go, Cnbs, Cointelegraph, Bloomberg, Forbes, Coindesk];

function SponsorSection() {
  return (
    <>
      <div className='container'>
        <h4>As featured in</h4>
        <div className={`${styles.sponsors} flex-center`}>
          {sponsors.map((s, i) => (
            <Link key={i}>
              <span>
                <img className='img' src={s}></img>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SponsorSection;
