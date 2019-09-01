import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
export default function Footer() {
  return (
    <div id="footer">
      <div className="container medium">
        <header className="major last">
          <h3>Contact Me</h3>
        </header><br />

        <p>Phone: 801.725.7965</p>
        <p>Email: Jeremyegan1@gmail.com</p>

        {/* <ContactForm /> */}

        <ul className="icons">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="copyright">
          <li>&copy; Directive. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
