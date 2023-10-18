import React, { useState, useEffect } from 'react';

function Counter({ initialCount, incrementAmount }) {
  // Step 1: Use useState to initialize the count state
  const [count, setCount] = useState(initialCount);

  // Step 2: Use useEffect for initializing and clearing the interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + incrementAmount);
    }, 1000); // Change the interval duration as needed

    // Step 3: Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [incrementAmount]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
