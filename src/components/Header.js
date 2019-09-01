import React from 'react';
import config from '../../config';
// import {} from 'react-icons/fi';


export default function Header() {
  return (
    <div id="header">
      <span className="logo icon fa-angellist"></span>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <p>{config.subHeading2}</p>
    </div>
  );
}
