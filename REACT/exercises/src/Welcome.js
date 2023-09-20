import Age from "./Age";

function Welcome({ name }) {
    return (
        <div className="App">

            {name ? <p>Hello <strong>{name}</strong></p> : <p>Hello <strong>guest</strong></p>}

            <Age
                age="24" />
        </div>
    );
}


export default Welcome;
