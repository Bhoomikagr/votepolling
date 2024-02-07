
import React, { useState } from 'react';
import './pollinglogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PollingLoginForm = ({ setIsPollingLoggedIn }) => {
  const [pollingUsername, setPollingUsername] = useState('');
  const [pollingPassword, setPollingPassword] = useState('');
  let navigate = useNavigate();

  const handlePollingLogin = async () => {
    try {
      const response = await axios.post('https://r66qcq6n-3001.inc1.devtunnels.ms/login', {
        email: pollingUsername,
        password: pollingPassword
      });

      const userData = response.data;
      localStorage.setItem("user", userData.email)
      
      console.log(userData.email)
  
      console.log("Logged in user data:", userData);
      setIsPollingLoggedIn(true);
      // navigate(`/polingform/${userData.email}`)

    } catch (error) {
      console.error('Login error:', error);
      alert('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div id='polling-login'>
      <h2>Polling Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={pollingUsername}
        onChange={(e) => setPollingUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={pollingPassword}
        onChange={(e) => setPollingPassword(e.target.value)}
      />
      <button onClick={handlePollingLogin}>Login</button>
    </div>
  );
};

export default PollingLoginForm;
