// Frontend code 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PollingForm from './PollingForm';
import AdminPage from './AdminPage';
import './app.css'
import Navbar from './Navbar';
import { Homepoll } from './Homepoll';
import RegistrationForm from './RegistrationForm';
const App = () => {
  return (
    <>
    <Router>
      <Navbar/> 
         <Routes>
          <Route path="/PollingForm" element={<PollingForm />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/" element={<Homepoll />} />
        </Routes> 
    
    </Router>
    </>
  );
};

export default App;