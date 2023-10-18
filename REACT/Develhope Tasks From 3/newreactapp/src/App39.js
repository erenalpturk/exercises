import React, { useState } from 'react';
import { render } from 'react-dom';

function useGithubUser(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username) {
      const apiUrl = `https://api.github.com/users/${username}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [username]);

  return userData;
}

function GithubUser({ username }) {
  const userData = useGithubUser(username);

  return (
    <div>
      <h2>Github User Information</h2>
      {userData ? (
        <div>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Followers:</strong> {userData.followers}</p>
          <p><strong>Following:</strong> {userData.following}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function App() {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h1>Github User Info</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button>Search</button>
      </div>
      {username && <GithubUser username={username} />}
    </div>
  );
}

render(<App />, document.getElementById('root'));
