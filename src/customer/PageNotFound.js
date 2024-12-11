import React from 'react';
import NotFoundImage from './notfound.png';
import './customernavbar.css'

export default function PageNotFound() {
  return (
    <div className="not-found-container">
      <img src={NotFoundImage} alt="Page Not Found" className="not-found-image" />
    </div>
  );
}