// Step 2: Create a component (MouseFollower.js)
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const handleMouseMove = (event) => {
      gsap.to(follower, {
        duration: 1,
        x: event.clientX,
        y: event.clientY,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='mousefollowers z-50'
      ref={followerRef}
      style={{
        position: 'fixed',
      }}
    />
  );
};

export default MouseFollower;
