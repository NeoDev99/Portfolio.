import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div
                    className={
                        toggleState === 1 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >

                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div
                    className={
                        toggleState === 2 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >

                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>

            </div>

            <div className="qualification__sections">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                >

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Matric</h3>
                            <span className="qualification__subtitle">
                                New Horizon College
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2018</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">University</h3>
                            <span className="qualification__subtitle">
                                Vaal Unviversity of Technology
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2019 - 2022</i>
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Internship</h3>
                            <span className="qualification__subtitle">
                                CapaCiTi
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        {/* more education */}

                    </div>
                </div>

                <div
                    className={
                        toggleState === 2
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                >

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Freelance Web Developer</h3>
                            <span className="qualification__subtitle">
                                Vanderbijlpark
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2019 - 2022</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Full-Stack Web Developer</h3>
                            <span className="qualification__subtitle">
                                CapaCiTi - Braamfontein
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">Jan 2023 — Aug 2023</i>
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full-Stack Web Developer</h3>
                            <span className="qualification__subtitle">
                                Old Mutual (Sandton)
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">Sept 23 - Dec 23</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
