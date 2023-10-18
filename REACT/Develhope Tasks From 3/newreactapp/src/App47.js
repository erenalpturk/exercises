import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GithubUser from './GithubUser'; // Import your GithubUser component

function ShowGithubUser({ match }) {
  const { username } = match.params;

  return (
    <div>
      <h1>Github User Details for {username}</h1>
      <GithubUser username={username} />
    </div>
  );
}

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
            <li>
              <Link to="/users/johndoe">John Doe's Github</Link>
            </li>
            <li>
              <Link to="/users/janesmith">Jane Smith's Github</Link>
            </li>
            <li>
              <Link to="/users/bobsmith">Bob Smith's Github</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <hr />

        {/* Define routes */}
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route path="/counter" component={Counter} />
        {/* Add routes for ShowGithubUser */}
        <Route path="/users/:username" component={ShowGithubUser} />
      </div>
    </Router>
  );
}

export default App;
