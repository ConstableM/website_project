import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
    // State for each hue value and speed
    const [topHue, setTopHue] = useState(0); // Top box hue
    const [middleHue, setMiddleHue] = useState(180); // Middle box hue
    const [speed, setSpeed] = useState(0); // Speed value
    const [isVisible, setIsVisible] = useState(false); // Initial state: color picker hidden, button visible

    // Handle changes to the top slider (hue)
    const handleTopSliderChange = (event) => {
        setTopHue(event.target.value);
    };

    // Handle changes to the middle slider (hue)
    const handleMiddleSliderChange = (event) => {
        setMiddleHue(event.target.value);
    };

    // Handle changes to the speed slider
    const handleSpeedSliderChange = (event) => {
        setSpeed(parseFloat(event.target.value).toFixed(1)); // Ensure the speed is a float with one decimal place
    };

    // Handle Reset Button Click
    const handleReset = () => {
        setTopHue(0);
        setMiddleHue(180);
        setSpeed(0);
    };

    // Handle Submit Button Click
    const handleSubmit = () => {
        // Handle submit logic here
        console.log("Submitted", { topHue, middleHue, speed });
    };

    // Toggle visibility of color picker
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    // Styles for each box
    const leftColorTopStyle = {
        backgroundColor: `hsl(${topHue}, 100%, 50%)`, // Top box color based on top slider hue
    };

    const leftColorMiddleStyle = {
        backgroundColor: `hsl(${middleHue}, 100%, 50%)`, // Middle box color based on middle slider hue
    };

    return (
        <div>
            {!isVisible ? (
                <button onClick={toggleVisibility} className="button toggle-button">
                    Change Background
                </button>
            ) : (
                <div className="colorpick-border">
                    <div id="leftcolor">
                        <div id="leftcolor-top" style={leftColorTopStyle}></div>
                        <div id="leftcolor-middle" style={leftColorMiddleStyle}></div>
                        <div id="leftcolor-bottom" style={{ backgroundColor: 'black' }}>
                            <span>Speed: {speed}</span>
                        </div>
                    </div>
                    <div className="sliders">
                        <div id="slider_top">
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={topHue}
                                onChange={handleTopSliderChange}
                            />
                        </div>
                        <div id="slider_middle">
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={middleHue}
                                onChange={handleMiddleSliderChange}
                            />
                        </div>
                        <div id="slider_speed">
                            <input
                                type="range"
                                min="0"
                                max="2"
                                step="0.1"
                                value={speed}
                                onChange={handleSpeedSliderChange}
                            />
                        </div>
                    </div>
                    <div id="rightbox">
                        <button onClick={toggleVisibility} className="button">Exit</button>
                        <button onClick={handleSubmit} className="button">Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
