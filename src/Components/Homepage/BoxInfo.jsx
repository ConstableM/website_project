// BoxInfo.js
import React from "react";

const BoxInfo = ({ selectedProject }) => {
    // Placeholder for project details
    const projectDetails = {
        1: "This website",
        2: "A TA scheduler application using Python and Django, designed to streamline scheduling for teaching assistants. The app features a user-friendly interface for managing and organizing schedules for UWM faculty.",
        3: "Minor networking projects on various as I continue to study topics can be found here",
        4: "Various completed data structure coursework written in java, all with thorough unit testing making use of JUnit",
        5: "A custom fitness planner/tracker website and forum website developed with a group of 4",
        6: "A custom implementation of Layer 2 (Data Link) and Layer 3 (Network) of the TCP/IP stack from scratch. This involves creating a robust network stack, building a network topology, and implementing routing and switching algorithms to handle network traffic efficiently..",

    };

    return (
        <div className="box-info">
            {selectedProject ? projectDetails[selectedProject] : "Select a project to see details."}
        </div>
    );
};

export default BoxInfo;
