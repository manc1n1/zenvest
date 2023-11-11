import React, { useState } from 'react';
import { useLoginContext } from '../utils/LoginContext';

const Signup = () => {
  const { setLogin, loginUser } = useLoginContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await loginUser(email, password);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Create Account</button>
    </div>
  );
};

export default Signup;