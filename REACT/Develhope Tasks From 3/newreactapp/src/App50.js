import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function ShowGithubUser({ match }) {
  const { username } = match.params;

  return (
    <div>
      <h1>Github User Details for {username}</h1>
      {/* Display GithubUser component here for the selected username */}
    </div>
  );
}

function GithubUserList() {
  const users = ['johndoe', 'janesmith', 'bobsmith']; // GitHub usernames

  return (
    <div>
      <h1>Github Users</h1>
      <ul>
        {users.map((username) => (
          <li key={username}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NotFound() {
  return <h1>404 - Not Found</h1>;
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
              <Link to="/users">Github Users</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route path="/counter" component={Counter} />
          <Route path="/users" component={GithubUserList} />
          <Route component={NotFound} />
        </Switch>
        
        {/* Nested route for individual user profiles */}
        <Route path="/users/:username" component={ShowGithubUser} />
      </div>
    </Router>
  );
}

export default App;
