import React, { useState } from "react";
import "./ColorPicker.css";
import { changeBaseHue } from '../../../js/swirl';

const ColorPicker = () => {
    // Custom hue map
    const customHueMap = {
        0: 0,     // Red
        1: 13,    // Orange
        2: 51,
        3: 53,    // Yellow
        4: 56,
        5: 59,
        6: 61,
        7: 63,
        8: 70,
        9: 85,
        10: 90,
        11: 106,
        12: 112,
        13: 135,  // Green
        14: 158,
        15: 177,
        16: 178,
        17: 179,
        18: 182,
        19: 186,  // Cyan
        20: 190,
        21: 191,
        22: 195,
        23: 222,  // Blue
        24: 260,
        25: 280,
        26: 285,
        27: 290,
        28: 294,
        29: 296,
        30: 302,
        31: 310,
        32: 320,
        33: 330,
        34: 340,
    };

    // State for hue value
    const [baseHueIndex, setBaseHueIndex] = useState(0); // Initial hue index value
    const [isVisible, setIsVisible] = useState(false); // Initial state: color picker hidden, button visible

    // Handle changes to the base slider (hue)
    const handleBaseSliderChange = (event) => {
        const index = Number(event.target.value);
        setBaseHueIndex(index);
    };

    // Handle Reset Button Click
    const handleReset = () => {
        setBaseHueIndex(0);
    };

    // Handle Submit Button Click
    const handleSubmit = () => {
        const hueValue = customHueMap[baseHueIndex];
        changeBaseHue(hueValue);
    };

    // Toggle visibility of color picker
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    // Styles for the base box
    const baseColorStyle = {
        backgroundColor: (baseHueIndex === 35 || baseHueIndex === 36) ? 'black' : `hsl(${customHueMap[baseHueIndex]}, 100%, 50%)`,
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
                                max="36"
                                value={baseHueIndex}
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