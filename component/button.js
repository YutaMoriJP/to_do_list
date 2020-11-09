import React, { useState, useEffect } from 'react';

const Button = ({ initialCount, style }) => {
  const [count, setCount] = useState(initialCount);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    count <= 0 ? setIsDisabled(true) : setIsDisabled(false);
  }, [count]);
  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(initialCount)} style={style}>
        Reset
      </button>
      <button
        onClick={() => setCount(prevCount => prevCount + 1)}
        style={style}
      >
        +
      </button>
      <button
        onClick={() => setCount(prevCount => prevCount - 1)}
        disabled={isDisabled}
        style={style}
      >
        -
      </button>
    </div>
  );
};

export { Button };
