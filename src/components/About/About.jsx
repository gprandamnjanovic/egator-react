import React from 'react';
import './about.css';
import me from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
        {/* frrs grid item */}
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={me} alt='about-me' />
          </div>
        </div>
        {/* second grid item */}
        <div className='about-content'>
          <div className='about-cards'>
            {/* card-1 */}
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Expirience</h5>
              <small>3+ Years Working</small>
            </article>
            {/* end card-1 */}
            {/* card-2 */}
            <article className='about-card'>
              <FiUsers className='about-icon' />
              <h5>Clients</h5>
              <small>200+ Clients Worldwide</small>
            </article>
            {/* end card-2 */}
            {/* card-3 */}
            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
            {/* end card-3 */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At sit
            aperiam ducimus, maxime assumenda recusandae odit fugit mollitia
            maiores impedit incidunt! Iure, molestiae hic omnis modi mollitia
            aut soluta et.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
