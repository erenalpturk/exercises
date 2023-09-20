import Age from "./Age";

function Welcome({ name, s }) {
    return (
        <div className="App">

            {name ? <p>Hello <strong>{name}</strong></p> : <p>Hello <strong>guest</strong></p>}
            {s > 18 && s <65 ? <p> <Age age={s} /></p> : ""}
        </div>
    );
}


export default Welcome;
