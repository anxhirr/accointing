import React from 'react';
import styles from './Footer.module.css';
import AccointingLogo from '../../../../images/general/accointing-logo.png';
import GooglePlay from '../../../../images/home-footer/google-play.png';
import AppStore from '../../../../images/home-footer/apple-store.png';
import Twitter from '../../../../images/home-footer/twitter.png';
import Discord from '../../../../images/home-footer/discord.png';
import Youtube from '../../../../images/home-footer/youtube.png';
import Reddit from '../../../../images/home-footer/reddit.png';
import Instagram from '../../../../images/home-footer/instagram.png';
import Linkedin from '../../../../images/home-footer/linkedin.png';
import SourceForge from '../../../../images/home-footer/sourceforge.png';
import SocialLink from './SocialLink';
import FooterLink from './FooterLink';

const SOCIAL__LINKS = [Twitter, Discord, Youtube, Reddit, Instagram, Linkedin];
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

function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.items}>
        <div className={styles['sourceforge-container']}>
          <a>
            <span>
              <img className={styles.img} src={AccointingLogo} />
            </span>
          </a>
          <a>
            <span>
              <img
                className={`${styles.img} ${styles.sourceforge}`}
                src={SourceForge}
              />
            </span>
          </a>
        </div>
        <div className={styles['links-container']}>
          <FooterLink data={FOOTER__LINKS_DATA} />
        </div>
        <div className={styles['app-play-socials--container']}>
          <div className={styles.download}>
            <a>
              <button>
                <span>
                  <img src={GooglePlay} />
                </span>

                <span>Google Play</span>
              </button>
            </a>
            <a>
              <button>
                <span>
                  <img src={AppStore} />
                </span>
                <span>App Store</span>
              </button>
            </a>
          </div>
          <div className={styles['social-links']}>
            {SOCIAL__LINKS.map((l, i) => (
              <SocialLink key={i} imgSrc={l} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className={styles.copyright}>
          ©2022 All Rights Reserved. Accointing is a trademark of Accointing AG.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
