import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a
        href='#home'
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#expiriance'
        onClick={() => setActiveNav('#expiriance')}
        className={activeNav === '#expiriance' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#service'
        onClick={() => setActiveNav('#service')}
        className={activeNav === '#service' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
