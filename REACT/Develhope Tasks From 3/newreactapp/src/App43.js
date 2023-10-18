import { useState, useCallback } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // Memoize the decrement function
  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  // Memoize the reset function
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}

export default useCounter;
