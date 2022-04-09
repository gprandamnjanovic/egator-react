import React from 'react';
import './exp.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Expiriance = () => {
  return (
    <section id='expiriance'>
      <h5>What Skill I Have</h5>
      <h2>My Expiriance</h2>
      <div className='container container-expiriance'>
        {/* frist item */}
        <div className='expirience-frontend'>
          <h3>Frontend Development</h3>
          <div className='exp-content'>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expirienced</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>Java Script</h4>
                <small className='text-light'>Expirienced</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Expirienced</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Expirienced</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Expirienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* second item */}
        <div className='expiriance-backend'>
          <h3>Backend Development</h3>
          <div className='exp-content'>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Expirianced</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Expirianced</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Expirianced</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Expirianced</small>
              </div>
            </article>
            <article className='exp-detail'>
              <BsPatchCheckFill className='exp-details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expiriance;
