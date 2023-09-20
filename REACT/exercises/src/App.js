import './App.css';
import Counter from './Counter';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome
        s="90"
      />
      <Counter
        interval={2000}
        amount={1}
        />
    </div>
  );
}

export default App;
