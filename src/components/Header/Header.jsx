import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <header id='home'>
      <div className='container header-container'>
        <h5>Hello I'am</h5>
        <h1>Goran Damnjanovic</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={me} alt='me' />
        </div>
        <a href='#contact' className='scroll-down'>
          Scrool Down
        </a>
      </div>
    </header>
  );
};

export default Header;
