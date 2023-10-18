import React from 'react';

// Age component
function Age({ age }) {
  return <p>Your age is {age}</p>;
}

// Welcome component
class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    // Check if age is within the specified range and name is "John"
    const isAgeInRange = age > 18 && age < 65;
    const isNameJohn = name === 'John';

    return (
      <div>
        <p>Welcome, {name}!</p>
        {isAgeInRange && isNameJohn && <Age age={age} />} {/* Render the Age component if both conditions are true */}
      </div>
    );
  }
}

//
