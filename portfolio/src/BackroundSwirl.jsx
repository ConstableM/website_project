import React, { useEffect } from 'react';
import { setup } from './swirl.js'; 

const BackroundSwirl = () => {
  useEffect(() => {
    setup();

    // Cleanup function to remove event listeners and clean up resources if necessary
    return () => {
    };
  }, []); // Empty dependency array ensures this runs once

  return ( // setup searches for this class name
    <div className="content--canvas" style={{ position: 'relative', zIndex: '-1' }}>
      {/* This is where the animation will be rendered */}
    </div>
  );
};

export default BackroundSwirl;







