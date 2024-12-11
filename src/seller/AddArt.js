import React, { useState, useRef } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import config from '../config'; // Make sure this file has the correct base URL for your API

export default function AddArt() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    price: '',
    file: null
  });

  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create FormData to send with the request
      const formDataToSend = new FormData();
      formDataToSend.append('category', formData.category);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('file', formData.file); // Append the file object

      // Sending the form data using axios
      const response = await axios.post(`${config.url}/api/art/addart`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      if (response.status === 200) {
        setFormData({
          category: '',
          title: '',
          description: '',
          price: '',
          file: null
        });
        fileInputRef.current.value = ''; // Reset file input
      }
      setMessage(response.data);
      setError(''); // Clear error if success
    } catch (error) {
      setError(error.response?.data || 'Error uploading the art');
      setMessage(''); // Clear message if error occurs
    }
  };

  return (
    <div className='registercontainer'>
      <h1 align="center">Add Art</h1>
      {message ? <h4 align="center">{message}</h4> : null}
      {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className='input-box'>
          <input
            type="text"
            id="category"
            placeholder='Category'
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-box'>
          <input
            type="text"
            id="title"
            placeholder='Title'
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-box'>
          <textarea
            id="description"
            placeholder='Description'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-box'>
          <input
            type="number"
            id="price"
            placeholder='Price'
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className='custom-file-input'>
          <input
            type="file"
            id="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            required
          />
        </div>
        <Button variant="outlined" type='submit' className="btn">
          <p>Upload</p>
        </Button>
      </form>
    </div>
  );
}
