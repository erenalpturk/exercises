
function Welcome({name}) {
    return (
        <div className="App">
            HELLO {name}
        </div>
    );
}

Welcome.defaultProps = {
    name: 'Guest'
  };

export default Welcome;
