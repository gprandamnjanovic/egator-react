import React from 'react';
import './test.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testemonials = () => {
  return (
    <section id='testemonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testemonials</h2>
      <Swiper
        className='container test-container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testemonial'>
          <div className='client-avatar'>
            <img src={AVT1} alt='avatar' />
          </div>
          <h5>Ernest Achiever</h5>
          <smal className='client-review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            alias vitae quasi nesciunt doloribus dicta est tempora iusto nam
            velit, pariatur nostrum facere dolorem ullam quam tempore asperiores
            totam minima!
          </smal>
        </SwiperSlide>
        <SwiperSlide className='testemonial'>
          <div className='client-avatar'>
            <img src={AVT2} alt='avatar' />
          </div>
          <h5>Ernest Achiever</h5>
          <smal className='client-review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            alias vitae quasi nesciunt doloribus dicta est tempora iusto nam
            velit, pariatur nostrum facere dolorem ullam quam tempore asperiores
            totam minima!
          </smal>
        </SwiperSlide>
        <SwiperSlide className='testemonial'>
          <div className='client-avatar'>
            <img src={AVT3} alt='avatar' />
          </div>
          <h5>Ernest Achiever</h5>
          <smal className='client-review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            alias vitae quasi nesciunt doloribus dicta est tempora iusto nam
            velit, pariatur nostrum facere dolorem ullam quam tempore asperiores
            totam minima!
          </smal>
        </SwiperSlide>
        <SwiperSlide className='testemonial'>
          <div className='client-avatar'>
            <img src={AVT4} alt='avatar' />
          </div>
          <h5>Ernest Achiever</h5>
          <smal className='client-review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            alias vitae quasi nesciunt doloribus dicta est tempora iusto nam
            velit, pariatur nostrum facere dolorem ullam quam tempore asperiores
            totam minima!
          </smal>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testemonials;
