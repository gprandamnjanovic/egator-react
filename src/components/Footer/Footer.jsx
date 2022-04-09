import React from 'react';
import './footer.css';
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si';
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>
        Egator
      </a>
      <ul className='perma-links'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#expirience'>Expirience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testemonials'>Testemonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer-social'>
        <a href='https://www.facebook.com'>
          <SiFacebook />
        </a>
        <a href='https://www.instagram.com'>
          <SiInstagram />
        </a>
        <a href='https://www.twitter.com'>
          <SiTwitter />
        </a>
      </div>
      <div className='footer-copyrights'>
        <small>
          &copy; {new Date().getFullYear()} Egator Tutorials All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
