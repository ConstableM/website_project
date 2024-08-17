
import "./styles.css";
import ColorPicker from "./ColorPicker";

const OuterBorder = () => {

    return ( 
      <div className="rectangle" style={{ position: 'relative', zIndex: '1' }}>

<div className="container">
  <div className="box">

    <div className="box1">
          <p className="name">Michael Constable</p>
          <p className="title">Software Developer</p>
    </div>

    <div className="box2">
          <p className="p1">Home</p>
          <p className="p2">Projects</p>

          <div className="colorpicker">
          <ColorPicker/>
        </div>

    </div>

  </div>


<div className="box">



  <div className="contactButton"> 
    <button class="btn btn-down btn-down--black">Contact</button>
  </div>
      
        

  <div className="emailsignup">
    <p>Subscribe to get new posts straight to your email inbox &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(you can unsubscribe anytime.)</p>
      <form className="emailForm">
        <input type="text" id="fname"  ></input>
        <input type="submit"></input>
        </form>
        
  </div>

</div>







      <div className="box">

     

      </div>
    </div>


</div>


    );
  };
  
  export default OuterBorder;