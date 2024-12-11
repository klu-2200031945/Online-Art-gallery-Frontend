import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import "./customerregistration.css";
import config from '../config'; // Ensure config.js exists and is properly configured

export default function Registration() {
  // State variables for form data, messages, and errors
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle input changes and update the form data state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission and send data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/api/customers/register`, formData);

      if (response.status === 200) {
        setFormData({
          fullname: '',
          username: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          location: '',
          contact: ''
        });
        setMessage(response.data); // Set success message
        setError(''); // Clear error message
      }
    } catch (error) {
      setError(error.response?.data || 'An error occurred. Please try again.'); // Set error message
      setMessage(''); // Clear success message
    }
  };

  return (
    <div>
      <div className='registercontainer'>
        {/* Display success or error message */}
        {message ? (
          <h4 align="center" style={{ color: 'green' }}>{message}</h4>
        ) : (
          <h4 align="center" style={{ color: 'red' }}>{error}</h4>
        )}

        <form onSubmit={handleSubmit}>
          <h1>Customer Registration</h1>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Enter Full Name'
              id="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Enter User Name'
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Gender'
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='date'
              placeholder='Create D.O.B'
              id="dateofbirth"
              value={formData.dateofbirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='email'
              placeholder='Enter Email'
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='password'
              placeholder='Create Password'
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Enter Location'
              id="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box'>
            <input
              type='number'
              placeholder='Enter Mobile Number'
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <Button variant="outlined" type='submit' className="btn">
            <p>Register</p>
          </Button>
        </form>
      </div>
    </div>
  );
}
