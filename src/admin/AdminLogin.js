import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';

export default function AdminLogin({ onAdminLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send request to check admin login
      const response = await axios.post(`${config.url}/api/admins/checkadminlogin`, formData);

      if (response.data) {
        // Admin login successful, invoke onAdminLogin
        onAdminLogin();
        localStorage.setItem('admin', JSON.stringify(response.data)); // Store admin data in localStorage
        navigate('/adminhome'); // Navigate to admin home page
      } else {
        setMessage('Login failed: Invalid credentials');
        setError('');
      }
    } catch (err) {
      setMessage('');
      setError('An error occurred: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div className="logincontainer">
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        {message && <h4 align="center" style={{ color: 'red' }}>{message}</h4>}
        {error && !message && <h4 align="center" style={{ color: 'red' }}>{error}</h4>}
        
        <div className="input-box">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Username"
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
        </div>

        <Button variant="outlined" type="submit" className="btn">
          <p>Login</p>
        </Button>
      </form>
    </div>
  );
}
