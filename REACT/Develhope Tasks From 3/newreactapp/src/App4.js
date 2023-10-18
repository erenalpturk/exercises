import React from 'react';

// Welcome component
class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age && <p>Your age is {age}</p>}
      </div>
    );
  }
}

// Set default props for the Welcome component
Welcome.defaultProps = {
  name: 'Guest',
};

export default Welcome;
