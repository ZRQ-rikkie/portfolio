import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">18</h3>
                    <span className="about__subtitle">Project completed </span>
                </div>

        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">567k</h3>
                    <span className="about__subtitle">Lines of Code</span>
                </div>

        </div>

        <div className="about__box">
            <i className="about__icon icon-clock"></i>
                <div>
                    <h3 className="about__title">1427</h3>
                    <span className="about__subtitle"> Hours of Study</span>
                </div>

        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">6</h3>
                    <span className="about__subtitle">Group works</span>
                </div>

        </div>

    </div>
  )
}

export default AboutBox
