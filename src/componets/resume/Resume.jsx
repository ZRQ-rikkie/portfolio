import React from 'react'
import './resume.css'
import Data from './Data'

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__tittle">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map(val,id)} => {

          }

        </div>
      </div>
    </section>
  )
}

export default Resume
