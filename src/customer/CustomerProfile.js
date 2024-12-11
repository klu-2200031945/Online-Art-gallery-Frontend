import React, { useEffect, useState } from 'react';
import profile from "./profile.jpg"
import "./customerprofile.css"
import { useNavigate } from 'react-router-dom';

export default function CustomerProfile() {
  const [customerData, setCustomerData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCustomerData = localStorage.getItem('customer');
    if (storedCustomerData) {
      const parsedCustomerData = JSON.parse(storedCustomerData);
      setCustomerData(parsedCustomerData)
    }
  }, []);
  return (
    <div>
      <div className="profile-page">
      <div className="profile-header">
        <h1>Welcome, Narasimha</h1>
        <img src={profile} alt="Profile" className="profile-picture" />
      </div>
      <div className="profile-details">
        <h2>Profile Information</h2>
        <p><strong>Full Name:</strong> {customerData.fullname}</p>
        <p><strong>User Name:</strong> {customerData.username}</p>
        <p><strong>Gender:</strong> {customerData.gender}</p>
        <p><strong>Date of Birth:</strong> {customerData.dateofbirth}</p>
        <p><strong>Email:</strong> {customerData.email}</p>
        <p><strong>Location:</strong> {customerData.location}</p>
        <p><strong>Contact:</strong> {customerData.contact}</p>
        <input id='profilebutton' type='button' value="Update Profile" onClick={()=> navigate('/updatecustomerprofile') }/>
      </div>
    </div>

    </div>
  )
}
