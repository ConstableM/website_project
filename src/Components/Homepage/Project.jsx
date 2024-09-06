import React from "react";

const Project = ({ text, onClick }) => {
    return (
        <div className="ProjectBox" onClick={onClick}>
            <p>{text}</p>
        </div>
    );
};

export default Project;