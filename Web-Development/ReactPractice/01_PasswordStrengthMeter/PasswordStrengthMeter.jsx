import React, { useState } from "react";

function getStrength(password) {
  // If password is empty
  if (!password) {
    return {
      score: 0,
      label: "",
    };
  }

  let score = 0;

  // 1. Password length must be at least 8
  if (password.length >= 8) {
    score++;
  }

  // 2. Contains an uppercase letter
  if (/[A-Z]/.test(password)) {
    score++;
  }

  // 3. Contains a number
  if (/[0-9]/.test(password)) {
    score++;
  }

  // 4. Contains a special character
  if (/[^A-Za-z0-9]/.test(password)) {
    score++;
  }

  // Decide the label
  let label = "Weak";

  if (score === 2 || score === 3) {
    label = "Medium";
  } else if (score === 4) {
    label = "Strong";
  }

  return {
    score: Math.max(score, 1),
    label,
  };
}

function PasswordStrengthMeter() {
  // Store the password entered by the user
  const [password, setPassword] = useState("");

  // Calculate strength
  const { score, label } = getStrength(password);

  // Colors for different strengths
  const colorForLabel = {
    Weak: "#e24b4a",
    Medium: "#ef9f27",
    Strong: "#639922",
  };

  return (
    <div style={{ maxWidth: 300 }}>

      {/* Password input */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{
          width: "100%",
          marginBottom: 8,
          padding: 8,
          boxSizing: "border-box",
        }}
      />

      {/* 4-segment strength bar */}
      <div style={{ display: "flex", gap: 4 }}>
        {[1, 2, 3, 4].map((seg) => (
          <div
            key={seg}
            style={{
              height: 4,
              flex: 1,
              borderRadius: 2,
              background:
                seg <= score
                  ? colorForLabel[label]
                  : "#ddd",
            }}
          />
        ))}
      </div>

      {/* Strength label */}
      {label && (
        <p
          style={{
            fontSize: 12,
            color: colorForLabel[label],
            marginTop: 6,
          }}
        >
          {label} password
        </p>
      )}
    </div>
  );
}

export default PasswordStrengthMeter;