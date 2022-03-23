import React, { useState } from 'react';
import { useScrollData } from 'scroll-data-hook';
import './App.css';

function App() {
  const [scaleVal, setScaleVal] = useState(0)

  const {
    scrolling,
    time,
    speed,
    direction,
    position,
    relativeDistance,
    totalDistance
  } = useScrollData();

  const increment = () => {
    setScaleVal(scaleVal + 1)
  }

  return (
    <div className="App">
      <div className='wrap'>
        <div className='filtered'></div>
      </div>
      <svg className='svg'>
        <filter id="displacement">
          <feImage xlinkHref="/text.png" result="textImage"/>
          {/* <feTurbulence type="turbulence" baseFrequency="0.05"
            numOctaves="2" result="turbulence"/> */}
          <feDisplacementMap in2="textImage" in="SourceGraphic" scale={speed.y / 30} 
            xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </svg>
    </div>
  );
}

export default App;
