import React, { useEffect } from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = ({ darkTheme }) => {
  useEffect(() => {
    console.log("Dark theme enabled:", darkTheme);
  }, [darkTheme]);

  return (
    <section className={`home section ${darkTheme ? 'dark-theme' : ''}`} id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home