import React, { useEffect, useRef, useState } from "react";

export default function Timers(props) {
  const startDBTime = new Date(props.startTime).getTime();
  const endTime = new Date(props.endTime).getTime();
  const currentTime = new Date().getTime();

  const timeLeft = endTime - currentTime;
  const remain = Math.ceil(timeLeft / 1000);

  const [time, setTime] = useState(remain);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime((prevTime) => {
        const newTime = Math.max(0, prevTime - 1);
        if (newTime === 0) {
          clearInterval(interval.current);
        }
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (days > 0) {
      return `${days} Day${days > 1 ? 's' : ''} ${hours} Hrs`;
    } else if (hours > 0) {
      return `${hours} Hrs ${minutes} Mins `;
    } else if (minutes > 0) {
      return `${minutes} Mins ${remainingSeconds} Secs`;
    } else {
      return `${remainingSeconds} Secs`;
    }
  };

  return (
    <div>
      <p>Closes in: {formatTime(time)}</p>
    </div>
  );
}
