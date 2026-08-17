import React, { useState, useEffect } from 'react';

/**
 * EXERCISE 5: useEffect (Side Effects / Data Fetching)
 *
 * Covers:
 * - useEffect with dependency array
 * - Loading states
 * - Simulated async data fetching (setTimeout mimics an API call)
 *
 * Task: Fetch a "user" whenever userId changes, showing a loading
 * state while the fetch is in progress.
 */

function fakeFetchUser(userId) {
  const users = {
    1: { name: 'Alice', role: 'Engineer' },
    2: { name: 'Bob', role: 'Designer' },
    3: { name: 'Carol', role: 'Manager' },
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(users[userId]), 800);   // simulate network delay
  });
}

function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fakeFetchUser(userId).then(data => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);   // re-runs whenever userId changes

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
      <h2>User Profile (useEffect)</h2>

      <div style={{ marginBottom: '12px' }}>
        {[1, 2, 3].map(id => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              marginRight: '8px',
              fontWeight: userId === id ? 'bold' : 'normal',
            }}
          >
            User {id}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p><strong>{user.name}</strong></p>
          <p>{user.role}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;