import React, { useState } from 'react';

function Cosor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <MouseFollower position={mousePosition} />
    </div>
  );
}

const MouseFollower = ({ position }) => {
  const { x, y } = position;
  return (
    <div >
        <div  style={{ left: x, top: y }}  className="fixed w-[1vw] h-[1vw] bg-black  rounded-full flex items-center justify-center mt-[-8px] ml-[-8px]  transform mix-blend-exclusion"></div>
        <div  style={{ left: x, top: y }}  className="fixed w-[1vw] h-[1vw] bg-black  rounded-full flex items-center justify-center mt-[-8px] ml-[-8px] transform-gpu"></div>
    </div>
  );
};

export default Cosor;
