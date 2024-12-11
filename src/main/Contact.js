import React from 'react';
import Button from '@mui/material/Button';
import "./contact.css"

export default function Registration() 
{
  
  
  return (
    <div>
    <div className='registercontainer'>

      <form>
      <h1>Contact Us</h1>
        <div className='input-box'>
          <input type='text' placeholder='Enter Full Name' id="fullname" required></input>
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Enter Email' id="email" required></input>
        </div>
        <div className='input-box'>
          <input type='number' placeholder='Enter Mobile Number'  id="contact" required></input>
        </div>
        <div className='input-box'>
          <textarea placeholder='Enter Your Query'  id="query" required></textarea>
        </div>
        <Button variant="outlined" type='submit' className="btn"><p>Submit</p></Button>

      </form>
    </div>
    </div>
  );
}