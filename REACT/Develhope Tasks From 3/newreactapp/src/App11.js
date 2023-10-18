import React from 'react';

// Age component
function Age({ age }) {
  return (
    <p>
      {age > 18 ? `Your age is ${age}` : 'You are very young!'}
    </p>
  );
}

export default Age;
