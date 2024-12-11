import React, { useState,useEffect } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function ChangePassword() {


    const [adminData, setAdminData] = useState("");

    useEffect(() => {
      const storedAdminData = localStorage.getItem('admin');
      if (storedAdminData) {
        const parsedAdminData = JSON.parse(storedAdminData);
        setAdminData(parsedAdminData);
      }
    }, []);

  const [formData, setFormData] = useState({
    oldpassword: '',
    newpassword: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.put('http://localhost:2563/changeadminpassword', {...formData,"username":adminData.username});
      if (response.data != null) 
      {
        localStorage.removeItem('isAdminLoggedIn');
        localStorage.removeItem('admin');
        navigate('/admin');
        window.location.reload()
      } 
      else 
      {
        setMessage("Old Password is Incorrect");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.response.data);
    }
  };

  return (
    <div className='registercontainer'>
      <h1>Change Password</h1>
      {
        message ? <h4 align="center" color='green'>{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <form onSubmit={handleSubmit}>
         <div className='input-box'>
          <input type="password" id="oldpassword" placeholder='Old Password' value={formData.oldpassword} onChange={handleChange} required />
        </div>
        <div className='input-box'>
          <input type="password" id="newpassword" placeholder='New Password' value={formData.newpassword} onChange={handleChange} required />
        </div>
        <Button variant="outlined" type='submit' className="btn"><p>Submit</p></Button>
      </form>
    </div>
  );
}