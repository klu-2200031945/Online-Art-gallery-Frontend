import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import config from '../config'

export default function AddCustomer() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state `formData` by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/insertcustomer`, formData);
      if (response.status === 200) 
      {
        //It will set all fields to""
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
      }
      setMessage(response.data);
      setError(''); //set error to ""
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div className='registercontainer'>
      {
        message ? <h4 align="center" style={{color:"green"}}>{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }

      <form onSubmit={handleSubmit}>
      <h1>Add Customer</h1>
        <div className='input-box'>
          <input type='text' placeholder='Enter Full Name' id="fullname" value={formData.fullname} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Enter User Name' id="username" value={formData.username} onChange={handleChange} required></input>
        </div>
        <div>
          <select id="gender" value={formData.gender}  onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className='input-box'>
          <input type='date' placeholder='Create D.O.B' id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Enter Email' id="email" value={formData.email} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Create Password' id="password" value={formData.password} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Enter Location' id="location" value={formData.location} onChange={handleChange} required></input>
        </div>
        <div className='input-box'>
          <input type='number' placeholder='Enter Mobile Number'  id="contact" value={formData.contact} onChange={handleChange}  required></input>
        </div>
        <Button variant="outlined" type='submit' className="btn"><p>Add Customer</p></Button>

      </form>
    </div>
  );
}