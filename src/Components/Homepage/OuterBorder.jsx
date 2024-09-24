import React, { useState } from "react";
import "./OuterBorder.css";
import ColorPicker from "./ColorPicker";
import Contact from "./Contact";
import Project from "./Project";
import BoxInfo from "./BoxInfo"; // Import BoxInfo
import axios from 'axios'; // Import axios for making HTTP requests

const OuterBorder = () => {
    const [currentSection, setCurrentSection] = useState('home');
    const [currentBoxSet, setCurrentBoxSet] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null); // State for selected project
    const [email, setEmail] = useState(''); // State for email input

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

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            // Send POST request to the server
            await axios.post('http://localhost:3000/add-email', { email });
            setEmail(''); // Clear the input field
        } catch (error) {
            // Optionally handle error without displaying a message
            setEmail(''); // Clear the input field
            }
    };

    return (
        <div className="rectangle" style={{ position: 'absolute', zIndex: '10000' }}>
            <div className="container">
                <div className="box1">
                    <p className="name">Michael Constable</p>
                    <p className="title">Software Developer</p>

                    <p className="p2" onClick={showHome} style={{ cursor: 'pointer' }}>Home</p>
                    <p className="p2 clickable" onClick={goToGithub} style={{ cursor: 'pointer' }}>Github</p>
                    <p className="p2" onClick={showProjects} style={{ cursor: 'pointer' }}>Projects</p>
                    <p className="p2 clickable" onClick={showAbout} style={{ cursor: 'pointer' }}>About</p>
                    <p className="p2 clickable" onClick={() => window.open("https://drive.google.com/file/d/1Pb_UMM_HhRQRrAf_ko1qfKFtSHhecP71/view?usp=sharing", "_blank")} style={{ cursor: 'pointer' }}>
                        Resume
                    </p>

                    <div className="colorpicker"><ColorPicker /></div>
                </div>

                <div className="box2">
                    {currentSection === 'about' && (
                        <div className="AboutMe">
                            <Contact />
                        </div>
                    )}
                    {currentSection === 'home' && (
                        <div className="emailsignup">
                            <p>Subscribe for project updates.</p>
                            <form className="emailForm" onSubmit={handleSubmit}>
                                <label>
                                    Email:
                                    <input
                                        type="text"
                                        className="email-input" // Custom class for styling
                                        id="fname"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </div>
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
                                            <Project text="Minor Projects (WIP)" onClick={() => handleProjectClick(3)} />
                                            <Project text="TCP/IP Stack (WIP)" onClick={() => handleProjectClick(6)} />
                                            <Project text="DS&A Coursework" onClick={() => handleProjectClick(4)} />
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
