import React from 'react';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleCircle,
} from 'react-icons/ai';
const HeaderSocial = () => {
  return (
    <div className='header-social'>
      <a href='https://www.linkendin.com' target='_blank' rel='noreferrer'>
        <AiFillLinkedin />
      </a>
      <a href='https://www.github.com' target='_blank' rel='noreferrer'>
        <AiFillGithub />
      </a>
      <a href='https://www.dribble.com' target='_blank' rel='noreferrer'>
        <AiFillDribbbleCircle />
      </a>
    </div>
  );
};

export default HeaderSocial;
