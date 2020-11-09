import React, { useState, useEffect } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalID = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(intervalID);
  }, []);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div>
      <h1>Current time: {time}</h1>
      <h1>Timer: {count}</h1>
    </div>
  );
};

export { Time };
