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
                            <h4 className="qualification__sub-title">New Horizon College</h4>

                            <span className="qualification__subtitle">
                                Bethlehem, Free State
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
                            <h4 className="qualification__sub-title">Vaal University of Technology</h4>

                            <span className="qualification__subtitle">
                                Vanderbijlpark, Gauteng
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">2019 - 2022</i>
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Internship</h3>
                            <h4 className="qualification__sub-title">CapaCiTi Tech Career Accelerator</h4>

                            <span className="qualification__subtitle">
                                Braamfontein, Johannesburg
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
                            <h3 className="qualification__title">Full-Stack Web Developer</h3>
                            <h4 className="qualification__sub-title">CapaCiTi Tech Career Accelerator</h4>

                            <span className="qualification__subtitle">
                                Braamfontein, Johannesburg
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">17 Jan 2023 - 31 Aug 2023</i>
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
                            <h3 className="qualification__title">Data Scientist</h3>
                            <h4 className="qualification__sub-title">Old Mutual Insure</h4>

                            <span className="qualification__subtitle">
                                Parktown, Johannesburg
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">4 Oct 2023 — 30 Nov 2023</i>
                            </div>
                        </div>

                    </div>

                    {/* 
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">C# Developer</h3>
                            <h4 className="qualification__sub-title">Old Mutual</h4>

                            <span className="qualification__subtitle">
                                Sandton, Johannesburg
                            </span>

                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt">September 2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>  */}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
