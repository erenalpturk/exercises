import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function useGithubUser() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGithubUser = async (username) => {
    setLoading(true);

    try {
      if (username) {
        const apiUrl = `https://api.github.com/users/${username}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`GitHub API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { userData, loading, error, fetchGithubUser };
}

function GithubUserSearch() {
  const [username, setUsername] = useState('');
  const { userData, loading, error, fetchGithubUser } = useGithubUser();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSearch = () => {
    fetchGithubUser(username);
  };

  return (
    <div>
      <h1>Github User Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {userData && (
        <div>
          <h2>Github User Information</h2>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Followers:</strong> {userData.followers}</p>
          <p><strong>Following:</strong> {userData.following}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <GithubUserSearch />
    </div>
  );
}

render(<App />, document.getElementById('root'));
