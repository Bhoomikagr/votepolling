
import React, { useState } from 'react';
import './adminlogin.css'

const AdminLogin = ({ setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const correctEmail = 'admin@example.com'; 
  const correctPassword = '1234'; 

  const handleLogin = () => {
    if (email === correctEmail && password === correctPassword) {
      setIsAdmin(true);
    } else {
      alert('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div id='admin'>
     
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
