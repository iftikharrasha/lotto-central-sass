import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = ({ startTime, expiryTime }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());
console.log("startTimestartTime",startTime,expiryTime)
  function getRemainingTime() {
    const currentTime = new Date().getTime();
    const remainingTime = Math.max(0, expiryTime - currentTime);
    return remainingTime;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime, expiryTime]);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <p>Remaining Time: {formatTime(remainingTime)}</p>
    </div>
  );
};

export default Timer;
