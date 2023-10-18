import React, { useState, useEffect } from 'react';

function ClickCounter({ onCounterChange }) {
  // Step 1: Use useState to initialize the count state
  const [count, setCount] = useState(0);

  // Step 2: Define a function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Step 3: Use useEffect to call onCounterChange when the count changes
  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count: {count}</p>
      {/* Step 4: Use the incrementCount function when the button is clicked */}
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default ClickCounter;
