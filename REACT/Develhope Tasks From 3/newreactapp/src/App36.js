import React, { useState } from 'react';
import GithubUser from './GithubUser'; // Make sure to import the GithubUser component

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState('');

  const handleAddUsername = () => {
    if (newUsername) {
      setUsernames([...usernames, newUsername]);
      setNewUsername('');
    }
  };

  return (
    <div>
      <h2>Github User List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button onClick={handleAddUsername}>Add</button>
      </div>
      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
}

export default GithubUserList;
