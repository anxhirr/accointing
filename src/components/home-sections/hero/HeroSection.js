import React from 'react';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';
import MyImg from '../../../images/general/homepageimg.webp';

function HeroSection() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={`${styles.text} flex-col-start-align`}>
        <h1>Track your crypto portfolio and file your crypto taxes</h1>
        <p>
          Compliant with the HMRC and trusted by UK tax professionals and
          traders alike, ACCOINTING.com offers the most accessible crypto tax
          and portfolio tracking platform on the market.
        </p>
        <Link to='/auth/sign-up'>
          <button className='btn btn-black'>Sign up for free</button>
        </Link>
      </div>
      <div className={styles['img-container']}>
        <img className={styles.img} src={MyImg}></img>
      </div>
    </section>
  );
}

export default HeroSection;
