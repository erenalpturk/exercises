
function Welcome({ name, age }) {
    return (
        <div className="App">
            <p>HELLO {name}</p>
            <p>Your age is {age}</p>
        </div>
    );
}

Welcome.defaultProps = {
    name: 'Guest'
};

export default Welcome;
