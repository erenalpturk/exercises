import useSWR from 'swr';

// Define a function to fetch the Github user data
async function fetchGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}

function useGithubUser(username) {
  // Use the useSWR hook to fetch and cache the data
  const { data, error } = useSWR(username, fetchGithubUser);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGithubUser;
