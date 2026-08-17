import React, { useState } from 'react';

/**
 * EXERCISE 4: Form Validation
 *
 * Covers:
 * - Controlled inputs (value + onChange)
 * - Validation logic on submit
 * - Displaying error messages conditionally
 *
 * Task: A signup form validating email format, password length,
 * and matching password confirmation.
 */

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '14px' }}>{errors.password}</p>}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.confirmPassword && <p style={{ color: 'red', fontSize: '14px' }}>{errors.confirmPassword}</p>}
        </div>

        <button type="submit" style={{ padding: '8px 16px' }}>Create Account</button>

        {success && <p style={{ color: 'green', marginTop: '12px' }}>Account created successfully!</p>}
      </form>
    </div>
  );
}

export default SignupForm;