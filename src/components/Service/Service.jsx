import React from 'react';
import './service.css';
import { BsCheck } from 'react-icons/bs';
const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container service-container'>
        <article className='service'>
          <div className='service-head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* end of UX/UI */}
        <article className='service'>
          <div className='service-head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* End of Wev development */}
        <article className='service'>
          <div className='service-head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className='service-list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};

export default Service;
