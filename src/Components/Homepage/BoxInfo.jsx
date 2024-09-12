// BoxInfo.js
import React from "react";
import './BoxInfo.css'; // Make sure to import the CSS file if it's in a separate file

const BoxInfo = ({ selectedProject }) => {
    // Placeholder for project details
    const projectDetails = {
        1: "Built using the react framework, hosted on a Digital Ocean Dropet I configured. Nginx to serve the frontend and an Express backend to facilitate communication with MongoDB Atlas. To get some docker practice I also created a containerized version building my own image, uploading to my Droplet container registry, pulling and serving it, however this version simply serves the build directory rather than the containerized version.",
        2: "A TA scheduler application designed to streamline the scheduling for teaching assistants. The app features a user-friendly interface for managing and organizing schedules for UWM faculty.",
        3: "Minor networking projects I work on as I continue to study networking topics can be found here.",
        4: "Various completed DS&A coursework in java, all with thorough unit testing making use of JUnit.",
        5: "A fitness planner/tracker website and forum website.",
        6: "An implementation of Layer 2 (Data Link) and Layer 3 (Network) of the TCP/IP stack from scratch. This involves creating a robust network stack, building a network topology, and implementing routing and switching algorithms to handle network traffic efficiently.",
    };

    // Mapping project IDs to GitHub links
    const projectLinks = {
        1: "https://github.com/ConstableM/website_project",
        2: "https://github.com/your-profile/ta-scheduler-repo", //replace
        3: "https://github.com/ConstableM/Minor-Networking-Projects",
        4: "https://github.com/ConstableM/DSA-Coursework",
        5: "https://github.com/your-profile/fitness-planner-repo", // replace
        6: "https://github.com/ConstableM/L2-and-L3-TCP-IP-Stack-Implentation",
    };

    // Get the appropriate GitHub link based on the selected project
    const githubLink = projectLinks[selectedProject];

    return (
        <div className="box-info">
            <p>{selectedProject ? projectDetails[selectedProject] : "Select a project to see details."}</p>
            {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="GitHubRef">View on GitHub</button>
                </a>
            )}
        </div>
    );
};

export default BoxInfo;
