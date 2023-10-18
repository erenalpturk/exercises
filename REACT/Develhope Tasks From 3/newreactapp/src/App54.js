import useSWR from 'swr';

// Define a function to fetch the Github user data
async function fetchGithubUser(username) {
  // Check if username is null, and return null if it is
  if (!username) return null;

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}

function useGithubUser(username) {
  // Use the useSWR hook to fetch and cache the data
  const { data, error, revalidate } = useSWR(username, fetchGithubUser);

  // Function to manually refetch the data
  const refetchUser = () => {
    revalidate();
  };

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    refetchUser, // Return the refetch function
  };
}

export default useGithubUser;
