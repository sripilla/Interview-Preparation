import React, { useState } from "react";

function TagInput() {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  function handleKeyDown(e) {
    // Only run when Enter is pressed
    if (e.key !== "Enter") {
      return;
    }

    // Remove extra spaces
    const newTag = input.trim();

    // Ignore empty input
    if (!newTag) {
      return;
    }

    // Check if tag already exists (case-insensitive)
    const duplicate = tags.some(
      (tag) => tag.toLowerCase() === newTag.toLowerCase()
    );

    // Don't add duplicate
    if (duplicate) {
      setInput("");
      return;
    }

    // Add new tag
    setTags([...tags, newTag]);

    // Clear input
    setInput("");
  }

  function removeTag(tagToRemove) {
    // Remove only the selected tag
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }

  return (
    <div style={{ maxWidth: 340 }}>
      <label style={{ fontSize: 13, color: "#666" }}>
        Skills
      </label>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 6,
          marginTop: 4,
        }}
      >
        {/* Display existing tags */}
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "#e6f1fb",
              color: "#185fa5",
              fontSize: 13,
              padding: "4px 8px",
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {tag}

            {/* Remove tag */}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => removeTag(tag)}
            >
              ×
            </span>
          </span>
        ))}

        {/* Input */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter..."
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: 13,
          }}
        />
      </div>

      <p style={{ fontSize: 12, color: "#888" }}>
        Press Enter to add, click × to remove. Duplicates are blocked.
      </p>
    </div>
  );
}

export default TagInput;