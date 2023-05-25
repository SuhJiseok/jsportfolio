// Clock.js
import React, { useRef, useEffect } from 'react';
import '../styles/Clock.scss'

function Clock() {
  const hrRef = useRef(null);
  const mnRef = useRef(null);

  useEffect(() => {
    // Initially set the time to 12:00
    let hh = 0;  // 0 hours * 30 degrees per hour
    let mm = 0;  // 0 minutes * 6 degrees per minute

    hrRef.current.style.transform = `rotateZ(${hh}deg)`;
    mnRef.current.style.transform = `rotateZ(${mm}deg)`;
  }, []);

  return (
    <div className="clock">
        <div className="hour">
            <div className="hr" ref={hrRef}></div>
        </div>
        <div className="min">
            <div className="mn" ref={mnRef}></div>
        </div>
        <p>10시간</p>
    </div>
  );
}

export default Clock;
