//no css dependencies
import React, { useEffect , useRef }  from 'react';
import { setup } from './swirl.js'; 


const BackroundSwirl = () => {

  useEffect(() => {
          setup("green", 220, .5);
      
  }, []
  );

  return <div className="content--canvas"></div>;

}

export default BackroundSwirl;








