import React from 'react'
import './about.css'
import Image from "../../assets/me.png"
import AboutBox from './AboutBox'


const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info ">
            <p className="about__description">Hello, I'm Ruiqi. Currently based in Dublin, I'm delving deep into the world of computer science at the graduate level after transitioning from a career in architecture. As a freelance designer with a strong focus on tech solutions, I've honed my skills to be agile, approachable, and exceedingly patient.</p>
            <a href="G:\0others\My portfolio\portfolio\my-portfolio\src\componets\about\myCV.pdf" download className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend</h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About
