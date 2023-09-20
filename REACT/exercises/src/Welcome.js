
function Welcome({ name, age }) {
    return (
        <div className="App">

                {name ? <p>Hello <strong>{name}</strong></p> : <p>Hello <strong>guest</strong></p> }
            
            <p>Your age is {age}</p>
        </div>
    );
}


export default Welcome;
