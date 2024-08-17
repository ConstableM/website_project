import "./styles.css";

const Contact = () => {
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
              <p className="p3">Contact</p>
              <p className="p4">Newsletter</p>
        </div>
    
      </div>
    
    
    <div className="box">
    
    
    
      <div className="contactButton"> 
        <button class="btn btn-down btn-down--black">Contact</button>
      </div>
          
            
    
      <div className="emailsignup">
      <p className="description">Software engineer specializing in web app development with Typescript, Node.js, Next.js, React, TailwindCSS, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PostgreSQL, Google Cloud, and Cloudflare.</p>

        <p>Subscribe to get new posts straight to your email inbox &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(you can unsubscribe anytime.)</p>
          <form className="emailForm">
            <input type="text" id="fname" name="fname" ></input>
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

      export default Contact;