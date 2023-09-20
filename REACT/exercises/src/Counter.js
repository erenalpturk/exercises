import { useEffect, useState } from 'react';
import './App.css';

function Counter(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count + props.amount)
        }, props.interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [count])

    return (
        <div className="App">
            <h1>{count}</h1>
        </div>
    );
}

export default Counter;