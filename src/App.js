import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

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
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App