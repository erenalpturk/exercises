import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Counter from './Counter'; // Import your Counter component

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <hr />

        {/* Define routes */}
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route path="/counter" component={Counter} />
        {/* Add more routes as needed */}
      </div>
    </Router>
  );
}

export default App;
