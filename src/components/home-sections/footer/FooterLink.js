import React from 'react';
import Footer from './Footer';
import styles from './Footer.module.css';

const FOOTER__LINKS_DATA = [
  { header: 'Accointing', linkText: ['Blog', 'Careers', 'Help', 'Community'] },
  {
    header: 'Explore',
    linkText: [
      'Integrations',
      'Crypto Tracker',
      'Crypto Tax Calculator',
      'For Accountants',
      'Pricing',
    ],
  },
  {
    header: 'Resources',
    linkText: [
      'Crypto 101 Guide',
      'Crypto Tax Guide',
      'Privacy Notice',
      'Imprint',
      'Terms',
    ],
  },
];

function FooterLink() {
  return (
    <>
      {FOOTER__LINKS_DATA.map((d, i) => {
        return (
          <div className={styles.link} key={i}>
            {<h4>{d.header}</h4>}
            {d.linkText.map((l, i) => {
              return <a key={i}>{l}</a>;
            })}
          </div>
        );
      })}
    </>
  );
}

export default FooterLink;
