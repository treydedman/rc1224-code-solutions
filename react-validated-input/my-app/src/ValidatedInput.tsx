import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  const valid = password.length >= 8;
  const message =
    password.length > 0 && !valid ? 'Your password is too short.' : '';

  return (
    <div>
      <label>Password:</label>
      <div>
        <input
          type="password"
          name="password"
          required
          minLength={8}
          value={password}
          onChange={handleChange}
        />
        <div>
          {password &&
            (valid ? <FaCheck color="green" /> : <FaTimes color="red" />)}
        </div>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}
