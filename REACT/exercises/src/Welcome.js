import Age from "./Age";

function Welcome({ name, s }) {
    return (
        <div className="App">

            {name ? <p>Hello <strong>{name}</strong></p> : <p>Hello <strong>guest</strong></p>}
            {s ? <p><Age age={s} /></p> : ""}
        </div>
    );
}


export default Welcome;
