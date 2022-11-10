import React from "react";

function SocialLink({ imgSrc }) {
  return (
    <a>
      <span>
        <img src={imgSrc} />
      </span>
    </a>
  );
}

export default SocialLink;
