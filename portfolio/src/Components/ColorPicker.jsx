import "./ColorPicker.css";
const ColorPicker =() =>{

    return(
        <>
    <div className="colorpick-border">

        <div className="sliders">
            <div id="slider_bg"><input type="range"/></div> <br></br>
            <div id="slider_speed"><input type="range"/></div> <br></br>
            <div id="slider_px"><input type="range"/></div> <br></br>

        </div>
    </div>


        <div id="leftcolor"></div>
        <div id="rightcolor"></div>

        </>
    );
}

export default ColorPicker;