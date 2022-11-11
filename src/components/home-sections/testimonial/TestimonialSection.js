import React from 'react';
import styles from './TestimonialSection.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Tweet from './Tweet';
import Tweet1Img from './image-assests/tweet1.png';
import Tweet2Img from './image-assests/tweet2.png';
import Tweet3Img from './image-assests/tweet3.png';

const TWEETS = [
  {
    name: 'Geoffrey Miller',
    username: '@primalpoly',
    text: 'Crypto folks: I have tried 3 crypto tax apps on the same 2021 transaction data: @accointing, @koinly, & @TokenTax. Of these, @accointing is best at tracking portfolios, transactions, & cost bases, & minimizing capital gains (e.g. with HIFO method). Might save you a lot, FWIW.',
    image: Tweet1Img,
  },
  {
    name: 'Sabri Goldberg ✨',
    username: '@sabrigoldberg',
    text: 'Best Crypto Tax report software? My favorite is @accointing.',
    image: Tweet2Img,
  },
  {
    name: 'New Kids On The Blockchain',
    username: '@kidsonthebchain',
    text: 'Looking for solid software to help report your crypto taxes? ,  check out @accointing we have been using this for the last year and makes life so much easier to produce ready to go tax reports. If you need more help , then speak to @crypjo091. Get your #cryptotaxes in order !!',
    image: Tweet3Img,
  },
];
function TestimonialSection() {
  return (
    <section className='container'>
      <h4 className={styles.h4}>What are people saying</h4>
      <div className={styles['testimonials-container']}>
        <div className={styles['arrow-container']}>
          <span>
            <AiOutlineArrowLeft />
          </span>
        </div>
        <div className={styles['tweets-container']}>
          {TWEETS.map((t, i) => (
            <Tweet
              key={i}
              name={t.name}
              username={t.username}
              text={t.text}
              image={t.image}
            />
          ))}
        </div>
        <div className={styles['arrow-container']}>
          <span>
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
