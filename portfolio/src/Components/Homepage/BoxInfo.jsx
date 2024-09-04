// BoxInfo.js
import React from "react";

const BoxInfo = ({ selectedProject }) => {
    // Placeholder for project details
    const projectDetails = {
        1: "Portfolio Application: Created a dynamic portfolio using React and Vite for a fast, modern interface. Utilized DynamoDB for scalable data management, Docker for consistent deployment, and Tailwind CSS for a responsive, stylish design. ",
        2: "Built a TA scheduler application using Python and Django, designed to streamline scheduling for teaching assistants. The app features a user-friendly interface for managing and organizing schedules, demonstrating my skills in backend development and web application design.",
        3: "Developed a fitness forum and tracker application using React, TypeScript, and Next.js. This project integrates workout tracking with a community forum, providing users with an engaging platform to log fitness activities and share experiences. It showcases my expertise in front-end development and modern JavaScript frameworks.",
        4: "An early-stage top-down RPG in GameMaker, inspired by bullet hell games. This project focuses on delivering a challenging, soulslike experience with intricate combat and bullet-hell mechanics.",
        5: "Developed a custom shell in C, offering basic command execution, process management, and input handling. This project demonstrates my understanding of operating system principles and C programming, providing a robust foundation for command-line interface functionality.",
        6: "Developed a versatile interpreter app designed to parse and execute code in a custom language. Built with a focus on accurate syntax handling and efficient execution, this project showcases my skills in language design and implementation, providing a robust tool for testing and debugging code.",

    };

    return (
        <div className="box-info">
            {selectedProject ? projectDetails[selectedProject] : "Select a project to see details."}
        </div>
    );
};

export default BoxInfo;
