import React from 'react'
import './home.css'
import Me from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">

      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        {/* <h1 className="home__name">Ruiqi Zhao</h1> */}
        {/* <h2 className="home__education">I'm a web developer</h2> */}
        <HeaderSocials/>
      <a href="#contact" className="btn" >Hire Me</a>

      <ScrollDown/>
      {/* <Shapes/> */}



      </div>

    </section>
  )
}

export default Home
