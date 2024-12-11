import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import config from '../config'

export default function UpdateSellerProfile() {
  const [sellerData, setSellerData] = useState({
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
  const [initialSellerData, setInitialSellerData] = useState({});

  useEffect(() => {
    const storedSellerData = localStorage.getItem('seller');
    if (storedSellerData) {
      const parsedSellerData = JSON.parse(storedSellerData);
      setSellerData(parsedSellerData);
      setInitialSellerData(parsedSellerData); // Store initial job seeker data
    }
  }, []);

  const handleChange = (e) => {
    setSellerData({ ...sellerData, [e.target.id]: e.target.value });
  };

  

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const updatedData = {};
      for (const key in sellerData) {
        if (sellerData[key] !== initialSellerData[key] && initialSellerData[key] !== '') {
          updatedData[key] = sellerData[key]; 
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        // There are changes
        updatedData.email = sellerData.email;
        const response = await axios.put(`${config.url}/updatesellerprofile`, updatedData);
        setMessage(response.data);
        setError('');
        const res = await axios.get(`${config.url}/sellerprofile/${sellerData.email}`, updatedData)
        localStorage.setItem("seller",JSON.stringify(res.data))
      } else {
        // No changes
        setMessage("No Changes in Seller Profile");
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
          <input type='text' placeholder='Enter Full Name' id="fullname" value={sellerData.fullname} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Enter User Name' id="username" value={sellerData.username} onChange={handleChange} required></input>
        </div>
        <div>
          <select id="input-options" value={sellerData.gender}  onChange={handleChange} readOnly>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className='input-box'>
          <input type='date' placeholder='Create D.O.B' id="dateofbirth" value={sellerData.dateofbirth} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Enter Email' id="email" value={sellerData.email} onChange={handleChange} readOnly></input>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Create Password' id="password" value={sellerData.password} onChange={handleChange} readOnly></input>
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Enter Location' id="location" value={sellerData.location} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='number' placeholder='Enter Mobile Number'  id="contact" value={sellerData.contact} onChange={handleChange}  required></input>
        </div>
        <Button variant="outlined" type='submit' className="btn"><p>Update</p></Button>

      </form>
    </div>
    </div>
  );
}