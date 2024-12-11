import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import config from '../config';

export default function AddSeller() {
  // Form state initialized with empty values
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

  // Message and error state variables
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    // Update formData with the user input
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending the form data to the backend to add a new seller
      const response = await axios.post(`${config.url}/api/sellers/addseller`, formData);
      
      // If the response is successful, reset the form and show success message
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
        setMessage('Seller added successfully');
        setError('');
      }
    } catch (error) {
      // If there is an error, display the error message
      setError(error.response?.data || 'An error occurred while adding the seller');
      setMessage('');
    }
  };

  return (
    <div className='registercontainer'>
      {/* Display success or error message */}
      {message && <h4 align="center" style={{ color: 'green' }}>{message}</h4>}
      {error && !message && <h4 align="center" style={{ color: 'red' }}>{error}</h4>}

      <form onSubmit={handleSubmit}>
        <h1>Add Seller</h1>

        {/* Input fields for seller details */}
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

        <div>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
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
          <p>Add Seller</p>
        </Button>
      </form>
    </div>
  );
}
