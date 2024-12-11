import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../customer/customerregistration.css"
import "../customer/customergallery.css"
import config from '../config'

export default function ViewArts() {
  const [arts, setArts] = useState([]);

  const fetchArts = async () => {
    try {
      const response = await axios.get(`${config.url}/viewarts`);
      setArts(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteart = async (artId) => {
    try {
      await axios.delete(`${config.url}/deleteart/${artId}`);
      fetchArts();
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchArts();
  }, []);
  return (
    <div className='gallery1'>
      <h1 style={{color:"black"}}>Arts</h1>
      <div className="cards2">
        
      {arts.map((art, index) => (
        <div className='card1'>
          <img src={`${config.url}/artimage/${art.file}`} alt="art" style={{ width: '400px', height: '250px' }} />
          <p id='gal'><u>Category</u> : {art.category}</p>
          <p id='gal'><u>Title</u> :{art.title}</p>
          <p id='gal'><u>Description</u> : {art.description}</p>
          <p id='gal'><u>Price</u> : {art.price}</p>
          <center>
          <button onClick={() => deleteart(art.artId)} id="dis_button">Delete</button>
            </center>
        </div>
      ))}
      </div>
    </div>
  )
}
