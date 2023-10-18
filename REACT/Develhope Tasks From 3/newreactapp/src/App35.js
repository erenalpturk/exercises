import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Define the API URL based on the provided username
    const apiUrl = `https://api.github.com/users/${username}`;

    // Fetch data from the GitHub API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [username]);

  return (
    <div>
      <h2>Github User Information</h2>
      {userData ? (
        <div>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Followers:</strong> {userData.followers}</p>
          <p><strong>Following:</strong> {userData.following}</p>
          {/* Add more data as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GithubUser;
