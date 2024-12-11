import React, { useEffect, useState } from 'react';
import profile from "../customer/profile.jpg"
import { useNavigate } from 'react-router-dom';

export default function SellerProfile() {
  const [sellerData, setSellerData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedSellerData = localStorage.getItem('seller');
    if (storedSellerData) {
      const parsedSellerData = JSON.parse(storedSellerData);
      setSellerData(parsedSellerData)
    }
  }, []);
  return (
    <div>
      <div className="profile-page">
      <div className="profile-header">
        <h1>Welcome, {sellerData.username}</h1>
        <img src={profile} alt="Profile" className="profile-picture" />
      </div>
      <div className="profile-details">
        <h2>Profile Information</h2>
        <p><strong>Full Name:</strong> {sellerData.fullname}</p>
        <p><strong>User Name:</strong> {sellerData.username}</p>
        <p><strong>Gender:</strong> {sellerData.gender}</p>
        <p><strong>Date of Birth:</strong> {sellerData.dateofbirth}</p>
        <p><strong>Email:</strong> {sellerData.email}</p>
        <p><strong>Location:</strong> {sellerData.location}</p>
        <p><strong>Contact:</strong> {sellerData.contact}</p>
        <input id='profilebutton' type='button' value="Update Profile" onClick={()=> navigate('/updatesellerprofile') }/>
      </div>
    </div>

    </div>
  )
}
