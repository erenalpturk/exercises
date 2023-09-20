import { useState } from 'react';
import './App.css';

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            {setInterval(() => {
                setCount(count + 1)
            }, 1000)}
            <h1>count</h1>
        </div>
    );
}

export default Counter;