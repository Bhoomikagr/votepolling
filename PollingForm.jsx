
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PollingLoginForm from './PollingLoginForm';
import './PollingForm.css';

const PollingForm = () => {
  const [isPollingLoggedIn, setIsPollingLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    role: "modi"
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitVote = async (e) => {
    e.preventDefault();
    const selectedOption = formData.role;
     let user = localStorage.getItem("user")
    try {
      let data = await axios.post('https://r66qcq6n-3001.inc1.devtunnels.ms/submit-vote', {
        user,  // Replace with the actual user identifier
        candidate: selectedOption,
      });
      console.log(data)
      console.log('Vote submitted successfully');
      // alert(data.message);
       window.location.assign("/")
    } catch (error) {
      console.error('Error submitting vote:', error.message);
    }
  };


  if (!isPollingLoggedIn) {
    return <PollingLoginForm setIsPollingLoggedIn={setIsPollingLoggedIn}  />;
  }

  

 return (
    <div>
      <form onSubmit={submitVote} className="polling-form" id="pollForm">
        {/* ... (your radio button options) */}
       
        <div className="headline">
          <h3>Who is the next Prime Minister</h3>
        </div>

        <label>Modi
          <input
            type="radio"
            name="role"
            value='modi'
            onChange={handleChange}
            checked={formData.role === "modi"}
          />
          
        </label>
        <label>Rahul
          <input
            type="radio"
            name="role"
            value="rahul"
            onChange={handleChange}
            checked={formData.role === "rahul"}
          />
          
        </label>
        <label> MLA
          <input
            type="radio"
            name="role"
            value='mla'
            onChange={handleChange}
            checked={formData.role === "mla"}
          />
          
        </label>
        <label> Other
          <input
            type="radio"
            name="role"
            value="other"
            onChange={handleChange}
            checked={formData.role === "adarsh"}
          />
          
        </label>
  
        <input type="submit" />
      </form>
    </div>
  );
};

export default PollingForm;