import React, { useEffect, useRef, useState } from 'react';
import styles from './assets/css/main.module.css';
import { Waypoint } from 'react-waypoint';

const ProgressBar = ({ skill, value }) => {
  const progressBarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && progressBarRef.current) {
      progressBarRef.current.style.width = `${value}%`;
    }
  }, [isVisible, value]);

  const handleWaypointEnter = () => {
    setIsVisible(true);
  };

  return (
    <Waypoint onEnter={handleWaypointEnter} bottomOffset="20%">
      <div className={`${styles.progress} skills-animation`}>
        <span className={styles.skill}>
          <span>{skill}</span> <i className={styles.val}>{value}%</i>
        </span>
        <div className={styles['progress-bar-wrap']}>
          <div 
            ref={progressBarRef} 
            className={styles['progress-bar']} 
            role="progressbar" 
            aria-valuenow={value} 
            aria-valuemin="0" 
            aria-valuemax="100"
            style={{
              width: '0%',
              transition: 'width 1s ease-in-out'
            }}
          >
          </div>
        </div>
      </div>
    </Waypoint>
  );
};

export default ProgressBar;