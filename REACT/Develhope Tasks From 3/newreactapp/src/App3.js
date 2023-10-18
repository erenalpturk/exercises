import React from 'react';

// Welcome component
class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return <p>Welcome, {name}!</p>;
  }
}

// Set default props for the Welcome component
Welcome.defaultProps = {
  name: 'Guest', // You can set any default name you prefer
};

export default Welcome;
