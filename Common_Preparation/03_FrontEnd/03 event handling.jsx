import React, { useState } from 'react';

/**
 * EXERCISE 3: Handling Events
 *
 * Covers:
 * - onClick, onChange, onSubmit
 * - e.preventDefault()
 * - Passing arguments to event handlers
 *
 * Task: A color picker that tracks clicks and shows the last typed
 * search query, with a submit that prevents default page reload.
 */

function EventDemo() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastSubmitted, setLastSubmitted] = useState('');

  const colors = ['red', 'blue', 'green', 'purple'];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();   // stops page reload
    setLastSubmitted(searchQuery);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
      <h2>Color Picker (onClick)</h2>
      <div style={{ display: 'flex', gap: '8px' }}>
        {colors.map(color => (
          <button
            key={color}
            onClick={() => handleColorClick(color)}
            style={{
              padding: '10px 16px',
              background: color,
              color: 'white',
              border: selectedColor === color ? '3px solid black' : 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {color}
          </button>
        ))}
      </div>
      {selectedColor && <p>Selected: {selectedColor}</p>}

      <h2 style={{ marginTop: '30px' }}>Search (onChange + onSubmit)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Type something..."
        />
        <button type="submit">Search</button>
      </form>
      {lastSubmitted && <p>You searched for: <strong>{lastSubmitted}</strong></p>}
    </div>
  );
}

export default EventDemo;