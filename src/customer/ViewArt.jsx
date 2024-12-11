import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import './customergallery.css'; // Import CSS file
import config from '../config';
// eslint-disable-next-line no-unused-vars
import Razorpay from 'razorpay-checkout';

export default function ViewArt() {
  const [artData, setArtData] = useState(null);
  const { artId } = useParams(); // Extract email from URL parameters

  useEffect(() => {
    const fetchArtData = async () => {
      try {
        const response = await axios.get(`${config.url}/viewart/${artId}`);
        setArtData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (artId) {
      fetchArtData();
    }
  }, [artId]);

  const handlePayment = () => {
    if (!artData) {
      console.error('Art data is not available.');
      return;
    }

    const options = {
      key: 'rzp_test_rt02HZsuR5f69V',
      amount: artData.price * 100,
      currency: 'INR',
      name: 'Gallery App',
      handler: function (response) {
        alert(`Payment of Rs.${artData.price}/- is Successful`);
      },
      prefill: {
        email: 'onlineartgallery@gmail.com',
        contact: '7780238678',
      },
      notes: {
        address: 'Razorpay Corporate office',
      },
      theme: {
        color: '8e3969',
      },
    };

    // Ensure that Razorpay object is available before creating a new instance
    if (window.Razorpay) {
      const pay = new window.Razorpay(options);
      pay.open();
    } else {
      console.error('Razorpay object is not available.');
    }
  };

  return artData ? (
    <div className="artdetails">
      <div className="detail_container">
        <div>
          <img
            id="detail_img"
            src={`${config.url}/artimage/${artData.file}`}
            alt="art"
            style={{ width: '800px', height: '500px' }}
          />
        </div>
        <div className="data">
          <div className="detaildata">
            <p id="gal">
              <u>Category</u> : {artData.category}
            </p>
            <p id="gal">
              <u>Title</u> :{artData.title}
            </p>
            <p id="gal1">
              <u>Description</u> : {artData.description}
            </p>
            <p id="gal">
              <u>Price</u> : {artData.price}
            </p>
          </div>
          <div className="detail_button">
            <button id="dis_button" onClick={handlePayment} disabled={!artData}>
              <p>Buy</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>No Art Data Found</p>
  );
}