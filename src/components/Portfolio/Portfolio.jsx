import React from 'react';
import './port.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container port-container'>
        {/* 1-item */}
        <article className='port-item'>
          <div className='port-item-img'>
            <img src={IMG1} alt='img1' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='port-item-cta'>
            <a
              href='https://www.github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://dribbble.com/shots/17967490-Motivation-Landing-Page-Exploration'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* 2-item */}
        <article className='port-item'>
          <div className='port-item-img'>
            <img src={IMG2} alt='img1' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='port-item-cta'>
            <a
              href='https://www.github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://dribbble.com/shots/17967490-Motivation-Landing-Page-Exploration'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* 3-item */}
        <article className='port-item'>
          <div className='port-item-img'>
            <img src={IMG3} alt='img1' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='port-item-cta'>
            <a
              href='https://www.github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://dribbble.com/shots/17967490-Motivation-Landing-Page-Exploration'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* 4-item */}
        <article className='port-item'>
          <div className='port-item-img'>
            <img src={IMG4} alt='img1' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='port-item-cta'>
            <a
              href='https://www.github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://dribbble.com/shots/17967490-Motivation-Landing-Page-Exploration'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* 5-item */}
        <article className='port-item'>
          <div className='port-item-img'>
            <img src={IMG5} alt='img1' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='port-item-cta'>
            <a
              href='https://www.github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://dribbble.com/shots/17967490-Motivation-Landing-Page-Exploration'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* 6-item */}
        <article className='port-item'>
          <div className='port-item-img'>
            <img src={IMG6} alt='img1' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='port-item-cta'>
            <a
              href='https://www.github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://dribbble.com/shots/17967490-Motivation-Landing-Page-Exploration'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
