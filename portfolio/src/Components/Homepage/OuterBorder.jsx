import React, { useState } from "react";
import "./OuterBorder.css";
import ColorPicker from "./ColorPicker";
import Contact from "./Contact";
import Project from "./Project";
import BoxInfo from "./BoxInfo"; // Import BoxInfo

const OuterBorder = () => {
    const [currentSection, setCurrentSection] = useState('home');
    const [currentBoxSet, setCurrentBoxSet] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null); // State for selected project

    const showHome = () => setCurrentSection('home');
    const showAbout = () => setCurrentSection('about');
    const showProjects = () => setCurrentSection('projects');

    const totalBoxSets = 2;

    const showNextSet = () => {
        setCurrentBoxSet(prevSet => (prevSet % totalBoxSets) + 1);
    };

    const showPreviousSet = () => {
        setCurrentBoxSet(prevSet => (prevSet - 2 + totalBoxSets) % totalBoxSets + 1);
    };

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId); // Update selected project ID
    };

    const goToGithub = () => {
        window.location.href = "https://github.com/ConstableM?tab=repositories";
    };

    return (
        <div className="rectangle" style={{ position: 'absolute', zIndex: '1' }}>
            <div className="container">
                <div className="box1">
                    <p className="name">Michael Constable</p>
                    <p className="title">Software Developer</p>

                    <p className="p2" onClick={showHome} style={{ cursor: 'pointer' }}>Home</p>
                    <p className="p2 clickable" onClick={goToGithub} style={{ cursor: 'pointer' }}>Github</p>
                    <p className="p2" onClick={showProjects} style={{ cursor: 'pointer' }}>Projects</p>
                    <p className="p2 clickable" onClick={showAbout} style={{ cursor: 'pointer' }}>About</p>
                    <p className="p2">Resume</p>

                    <div className="colorpicker"><ColorPicker /></div>
                </div>

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
                        <div className="">
                            <BoxInfo selectedProject={selectedProject} /> {/* Display BoxInfo */}
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
                                            <Project text="Personal Portfolio" onClick={() => handleProjectClick(1)} />
                                            <Project text="Fitness Forum/Tracker" onClick={() => handleProjectClick(5)} />
                                            <Project text="TA Scheduler" onClick={() => handleProjectClick(2)} />
                                        </>
                                    )}
                                    {currentBoxSet === 2 && (
                                        <>
                                            <Project text="Minor Projects" onClick={() => handleProjectClick(3)} />
                                            <Project text="TCP/IP Stack in C" onClick={() => handleProjectClick(6)} />
                                            <Project text="Data Structure" onClick={() => handleProjectClick(4)} />
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
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OuterBorder;
