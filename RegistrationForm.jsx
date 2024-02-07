
import React, { useState } from 'react';
import axios from 'axios';
import './register.css'; // Import the CSS file

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('https://r66qcq6n-3001.inc1.devtunnels.ms/register', {
          username,
          email,
          password
        });
        console.log('Registration successful:', response.data);
        window.location.assign("/pollingform")
        // You can redirect the user or perform any other action after successful registration
      } catch (error) {
        if (error.response) {
          console.error('Error registering user:', error.response.data);
        } else {
          console.error('Error registering user:', error.message);
        }
        // Handle error, display message to user, etc.
      }
      
    }

  return (
    <div id="registration-form"> {/* Apply the CSS to the parent div */}
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" name='Register'/>
      </form>
    </div>
  );
};

export default RegistrationForm;
