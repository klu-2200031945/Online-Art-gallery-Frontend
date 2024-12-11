import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import config from '../config'

export default function UpdateCustomerProfile() {
  const [customerData, setCustomerData] = useState({
    fullname: '',
    username:'',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [initialCustomerData, setInitialCustomerData] = useState({});

  useEffect(() => {
    const storedCustomerData = localStorage.getItem('customer');
    if (storedCustomerData) {
      const parsedCustomerData = JSON.parse(storedCustomerData);
      setCustomerData(parsedCustomerData);
      setInitialCustomerData(parsedCustomerData); // Store initial job seeker data
    }
  }, []);

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const updatedData = {};
      for (const key in customerData) {
        if (customerData[key] !== initialCustomerData[key] && initialCustomerData[key] !== '') {
          updatedData[key] = customerData[key]; 
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        // There are changes
        updatedData.email = customerData.email;
        const response = await axios.put(`${config.url}/updatecustomerprofile`, updatedData);
        setMessage(response.data);
        setError('');
        const res = await axios.get(`${config.url}/customerprofile/${customerData.email}`, updatedData)
        localStorage.setItem("customer",JSON.stringify(res.data))
      } else {
        // No changes
        setMessage("No Changes in Job Seeker Profile");
        setError("");
      }
    } 
    catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  
  return (
    <div>
    <div className='registercontainer'>
        
      <h1>Update Profile</h1>
    
      {
        message ? <h4 align="center" style={{color:"green"}}>{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <input type='text' placeholder='Enter Full Name' id="fullname" value={customerData.fullname} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Enter User Name' id="username" value={customerData.username} onChange={handleChange} required></input>
        </div>
        <div>
          <select id="input-options" value={customerData.gender}  onChange={handleChange} readOnly>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className='input-box'>
          <input type='date' placeholder='Create D.O.B' id="dateofbirth" value={customerData.dateofbirth} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Enter Email' id="email" value={customerData.email} onChange={handleChange} readOnly></input>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Create Password' id="password" value={customerData.password} onChange={handleChange} readOnly></input>
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Enter Location' id="location" value={customerData.location} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='number' placeholder='Enter Mobile Number'  id="contact" value={customerData.contact} onChange={handleChange}  required></input>
        </div>
        <Button variant="outlined" type='submit' className="btn"><p>Update</p></Button>

      </form>
    </div>
    </div>
  );
}