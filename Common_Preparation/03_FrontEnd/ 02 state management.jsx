import React, { useState } from 'react';

/**
 * EXERCISE 2: State Management (useState)
 *
 * Covers:
 * - Basic useState (counter)
 * - Functional updates (prev => prev + 1)
 * - Object state with immutable updates (spread operator)
 *
 * Task: A counter with increment/decrement/reset, plus a profile
 * editor showing immutable object state updates.
 */

function StateDemo() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState({ name: 'Alice', age: 25 });

  const increment = () => setCount(prev => prev + 1);   // functional update — safest
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  const incrementAge = () => {
    // spread the old object, only override the changed field
    setProfile({ ...profile, age: profile.age + 1 });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '24px' }}>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={reset} style={{ margin: '0 8px' }}>Reset</button>
      <button onClick={increment}>+</button>

      <h2 style={{ marginTop: '30px' }}>Profile (object state)</h2>
      <p>{profile.name}, age {profile.age}</p>
      <button onClick={incrementAge}>Birthday +1</button>
    </div>
  );
}

export default StateDemo;