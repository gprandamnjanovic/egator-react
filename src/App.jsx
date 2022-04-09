import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Expiriance from './components/Expiriance/Expiriance';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';
import Testemonials from './components/Testemonials/Testemonials';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expiriance />
      <Service />
      <Portfolio />
      <Testemonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
