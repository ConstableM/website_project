import React, { useState } from "react";
import "./OuterBorder.css";
import ColorPicker from "./ColorPicker";
import Contact from "./Contact";
import Project from "./Project";

const OuterBorder = () => {
    const [currentSection, setCurrentSection] = useState('home'); // default to 'home'
    const [currentBoxSet, setCurrentBoxSet] = useState(1); // Track which set of boxes to show

    const showHome = () => setCurrentSection('home');
    const showAbout = () => setCurrentSection('about');
    const showProjects = () => setCurrentSection('projects');

    const totalBoxSets = 3; // Total number of box sets

    const showNextSet = () => {
        setCurrentBoxSet(prevSet => (prevSet % totalBoxSets) + 1);
    };

    const showPreviousSet = () => {
        setCurrentBoxSet(prevSet => (prevSet - 2 + totalBoxSets) % totalBoxSets + 1);
    };

    return (
        <div className="rectangle" style={{ position: 'absolute', zIndex: '1' }}>
            <div className="container"> {/* Nesting Begin */}
                <div className="box1">
                    <p className="name">Michael Constable</p>
                    <p className="title">Software Developer</p>
                    <p className="p1" onClick={showHome} style={{ cursor: 'pointer' }}>Home</p>
                    <p className="p2" onClick={showProjects} style={{ cursor: 'pointer' }}>Projects</p>
                    <div className="p2 clickable" onClick={showAbout} style={{ cursor: 'pointer' }}>About</div>
                    <div className="colorpicker"><ColorPicker /></div>
                </div> {/* end box 1 */}

                <div className="box2">
                    {currentSection === 'about' && (
                        <div className="AboutMe">
                            <Contact />
                        </div>
                    )}
                    {currentSection === 'home' && (
                        <>
                            <p className="introduction">
                                New Grad CS developer with experience developing applications using Python, HTML/CSS/JS, React, Django, TypeScript, Tailwind, SQL, noSQL, AWS, and Docker.
                            </p>
                            <p>Resume Github</p>
                            <div className="emailsignup">
                                <p>Subscribe to get new posts straight to your email.</p>
                                <form className="emailForm">
                                    <input type="text" id="fname" />
                                    <input type="submit" />
                                </form>
                            </div>
                        </>
                    )}
                    {currentSection === 'projects' && (
                        <div className="projects-wrapper">
                            <button 
                                className="arrow left-arrow" 
                                onClick={showPreviousSet}
                            >
                                ←
                            </button>
                            <div className="projects-container">
                                {currentBoxSet === 1 && (
                                    <>
                                        <Project text="Personal Portfolio" />
                                        <Project text="Text for Project 2" />
                                        <Project text="Text for Project 3" />
                                    </>
                                )}
                                {currentBoxSet === 2 && (
                                    <>
                                        <Project text="Text for Project 4" />
                                        <Project text="Text for Project 5" />
                                        <Project text="Text for Project 6" />
                                    </>
                                )}
                                {currentBoxSet === 3 && (
                                    <>
                                        <Project text="Text for Project 7" />
                                        <Project text="Text for Project 8" />
                                        <Project text="Text for Project 9" />
                                    </>
                                )}
                            </div>
                            <button 
                                className="arrow right-arrow" 
                                onClick={showNextSet}
                            >
                                →
                            </button>
                        </div>
                    )}
                </div>{/* end box 2 */}
            </div>
        </div>
    );
};

export default OuterBorder;
