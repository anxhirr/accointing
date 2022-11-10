import React from 'react';

function FooterLink({ data }) {
  return (
    <>
      {data.map((d, i) => {
        return (
          <div key={i}>
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
