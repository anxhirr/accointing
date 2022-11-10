import React from "react";
import styles from "./Tweet.module.css";
import { AiOutlineTwitter } from "react-icons/ai";

function Tweet(data) {
  const { name, username, text, image } = data;
  return (
    <div className={styles["tweet-continer"]}>
      <div className={styles.tweet}>
        <div className={styles.header}>
          <div className={styles.profile}>
            <span className={styles["img-span"]}>
              <img className={styles.img} src={image} alt="profile" />
            </span>
            <span>
              <h5>{name}</h5>
              <p>{username}</p>
            </span>
          </div>
          <button className={styles.btn}>
            <AiOutlineTwitter />
          </button>
        </div>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
