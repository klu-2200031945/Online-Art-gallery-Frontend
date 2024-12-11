import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';

export default function CustomerLogin({ onCustomerLogin, onSellerLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Form Data:", formData);  // Log the form data to ensure it's correct

      const customerResponse = await axios.post(`${config.url}/api/customers/checkcustomerlogin`, formData);
      console.log('Customer Response:', customerResponse);  // Log the customer response
  
      if (customerResponse.data) {
        console.log('Customer login successful');
        onCustomerLogin();
        localStorage.setItem('customer', JSON.stringify(customerResponse.data));
        navigate('/customerhome');
        return;
      } else {
        console.log('Customer login failed'); // Log customer login failure
      }
  
      // Then, check seller login
      const sellerResponse = await axios.post(`${config.url}/api/sellers/checksellerlogin`, formData);
      console.log('Seller Response:', sellerResponse);  // Log the seller response
  
      if (sellerResponse.data) {
        console.log('Seller login successful');
        onSellerLogin();
        localStorage.setItem('seller', JSON.stringify(sellerResponse.data));
        navigate('/sellerhome');
        return;
      } else {
        console.log('Seller login failed'); // Log seller login failure
      }
  
      // If both fail
      setMessage('Login failed: Invalid credentials');
      setError('');
  
    } catch (err) {
      console.log('Error:', err);  // Log any error that happens during the request
      setMessage('');
      setError('An error occurred: ' + (err.response?.data || err.message));
    }
  };
  




  return (
    <div className="logincontainer">
      <h1>Login</h1>
      {message ? (
        <h4 align="center" style={{ color: 'red' }}>{message}</h4>
      ) : (
        <h4 align="center" style={{ color: 'red' }}>{error}</h4>
      )}
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/forgotpassword">Forgot Password?</a>
        </div>
        <Button variant="outlined" type="submit" className="btn">
          <p>Login</p>
        </Button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="/customerregistration">Register Here</a>
          </p>
        </div>
      </form>
    </div>
  );
}
