import React from 'react';

// Age component
function Age({ age }) {
  return <p>Your age is {age}</p>;
}

// Welcome component
class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    // Check if age is within the specified range
    const isAgeInRange = age > 18 && age < 65;

    return (
      <div>
        <p>Welcome, {name}!</p>
        {isAgeInRange && <Age age={age} />} {/* Render the Age component if age is within the range */}
      </div>
    );
  }
}

// Set default props for the Welcome component
Welcome.defaultProps = {
  name: 'Guest',
};

export default Welcome;
