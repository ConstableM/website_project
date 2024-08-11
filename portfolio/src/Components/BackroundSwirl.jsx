//no css dependencies
import React, { useEffect , useRef }  from 'react';
import { setup } from './swirl.js'; 


const BackroundSwirl = () => {

  useEffect(() => {
          setup();
      
  }, []
  );

  return <div className="content--canvas"></div>;

}

export default BackroundSwirl;

//simple solution
//1. add a function called change color to swirl.js
// when setup is called add a call to this function first
// since baseHue is mutable we just need to pass it in as a prop (string of color)







