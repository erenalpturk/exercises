import React, { useState } from 'react';

function ClickCounter() {
  // Step 1: Use the useState hook to initialize the count state
  const [count, setCount] = useState(0);

  // Step 2: Define a function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count: {count}</p>
      {/* Step 3: Use the incrementCount function when the button is clicked */}
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default ClickCounter;
