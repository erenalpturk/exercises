import { useState } from 'react';
import './App.css';


function Clickcounter() {
    const [count, setCount] = useState(0)
  return (
    <div className="App">
        {count}
        <button onClick={()=>setCount(count+1)} >+</button>
    </div>
  );
}

export default Clickcounter;
