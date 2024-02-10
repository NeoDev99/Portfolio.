import './App.css';
import React, { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Projects from './components/work/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <div className={`app ${darkTheme ? 'dark-theme' : ''}`}>
      <Header toggleDarkTheme={toggleDarkTheme} />

      <main className='main'>
        <Home darkTheme={darkTheme} />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App;