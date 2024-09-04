import React, { useState } from "react";
import "./ColorPicker.css";
import { changeBaseHue } from '../../../js/swirl.js'; // Adjust the path as necessary

const ColorPicker = () => {
    // State for hue value
    const [baseHue, setBaseHue] = useState(0); // Initial hue value
    const [isVisible, setIsVisible] = useState(false); // Initial state: color picker hidden, button visible

    // Handle changes to the base slider (hue)
    const handleBaseSliderChange = (event) => {
        setBaseHue(event.target.value);
    };

    // Handle Reset Button Click
    const handleReset = () => {
        setBaseHue(0);
    };

    // Handle Submit Button Click
    const handleSubmit = () => {
        // Convert baseHue to a number before passing it to changeBaseHue
        const hueValue = Number(baseHue);
        changeBaseHue(hueValue);
        

    };

    // Toggle visibility of color picker
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    // Styles for the base box
    const baseColorStyle = {
        backgroundColor: `hsl(${baseHue}, 100%, 50%)`, // Box color based on base slider hue
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
                        <div id="leftcolor-base" style={baseColorStyle}></div>
                    </div>
                    <div className="sliders">
                        <div id="slider_base">
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={baseHue}
                                onChange={handleBaseSliderChange}
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
