import React from "react";
import styles from "./Feature.module.css";

function Feature({ left = false, img, header, paragraph }) {
  return (
    <div className={`${styles.feature} flex-center`}>
      {left && (
        <div>
          <img src={img} />
        </div>
      )}
      <div>
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
      {!left && (
        <div>
          <img src={img} />
        </div>
      )}
    </div>
  );
}

export default Feature;
