import React, { useState, useEffect } from 'react';
import './home.css';
import Me from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  const [title, setTitle] = useState('');
  const [h1Completed, setH1Completed] = useState(false); // 新的状态标记

  const typeWriter = (text, setter, callback) => {
    let index = 0;
    let currentText = "";
    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text.charAt(index);
        setter(currentText);
        index++;
      } else {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 70);
  };

  useEffect(() => {
    const fullTitle = "Hi, I'm Ruiqi Zhao";

    typeWriter(fullTitle, setTitle, () => {
      setH1Completed(true); 
    });
  }, []);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">{title}</h1>
         <p className={`home__education ${h1Completed ? 'fade-in' : 'fade-out'}`}>
        Coding enthusiast, problem-solver at heart.
      </p>
        <HeaderSocials />
        <a href="#contact" className="btn">Hire Me</a>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
