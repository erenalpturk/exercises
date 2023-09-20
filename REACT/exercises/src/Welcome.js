import Age from "./Age";

function Welcome({ name, age }) {
    return (
        <div className="App">

            {name ? <p>Hello <strong>{name}</strong></p> : <p>Hello <strong>guest</strong></p>}
            {age > 18 && <Age age={age} />}
        </div>
    );
}


export default Welcome;
