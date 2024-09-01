import React, { useEffect, useRef, useState } from 'react';
import './SkillBar.css'; // Your CSS file

const SkillBar = ({ skillName, width,level }) => {
  const [isInView, setIsInView] = useState(false);
  const skillBarRef = useRef(null);

  const checkIfInView = () => {
    const rect = skillBarRef.current.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      setIsInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);

    // Initial check in case the elements are already in view
    checkIfInView();

    return () => {
      window.removeEventListener('scroll', checkIfInView);
      window.removeEventListener('resize', checkIfInView);
    };
  }, []);

  return (
    <div>
    <p>{skillName}</p>
    <div className="container">
      <div
        className="skills"
        ref={skillBarRef}
        style={{
          width: isInView ? width : '0%',
          backgroundColor: "#04AA6D",
          transition: 'width 2s ease-in-out',
        }}
      >
        {level}
      </div>
    </div>
    </div>
  );
};

export default SkillBar;
