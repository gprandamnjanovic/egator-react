import React from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0guw4d5',
      'template_6pb6z4d',
      form.current,
      'DmuQh2UsGJzdli_QH'
    );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineMail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>damnjanovicgoran7@gmail.com</h5>
            <a href='mailto:damnjanovicgoran7@gmail.com' target='_blank'>
              Send Message
            </a>
          </article>
          <article className='contact-option'>
            <BsMessenger className='contact-option-icon' />
            <h4>Messenger</h4>
            <h5>Goran Damnjanovic</h5>
            <a href='https://m.me/goran.damnjanovic.77' target='_blank'>
              Send Message
            </a>
          </article>
          <article className='contact-option'>
            <FaViber className='contact-option-icon' />
            <h4>Viber</h4>
            <h5>+381 (64) 8201-496</h5>
            <a
              href='https://api.whatsapp.com/send?phone="+381648201496"'
              target='_blank'
            >
              Send Message
            </a>
          </article>
        </div>
        {/* end of coctact optons */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
