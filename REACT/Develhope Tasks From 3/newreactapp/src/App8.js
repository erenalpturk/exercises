import React from 'react';

// Age component
function Age({ age }) {
  return <p>Your age is {age}</p>;
}

// Welcome component
class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age !== undefined && age !== null && <Age age={age} />} {/* Render the Age component if age is present */}
      </div>
    );
  }
}

// Set default props for the Welcome component
Welcome.defaultProps = {
  name: 'Guest',
};

export default Welcome;
