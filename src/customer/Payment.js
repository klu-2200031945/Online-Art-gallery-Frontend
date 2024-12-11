import React, { useEffect, useState } from 'react';
import config from '../config'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const [customerData, setCustomerData] = useState("");
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
          const storedCustomerData = localStorage.getItem('customer');
    if (storedCustomerData) {
      const parsedCustomerData = JSON.parse(storedCustomerData);
      setCustomerData(parsedCustomerData)
    }
        }, [artId])

    const handlePayment = () => {
            const options = {
                key: "rzp_test_rt02HZsuR5f69V",
                amount: artData.price*100,
                currency: "INR",
                name: "Gallery App",
                handler: function(response) {
                    alert(`Payment of Rs.${artData.price}/- is Successful`); 
                },
                prefill: {
                    name: customerData.fullname,
                    email: "onlineartgallery@gmail.com",
                    contact: "7780238678"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "8e3969"
                }
            };
            const pay = new window.Razorpay(options);
            pay.open();
        
    };
    

    return (
        <div>
            <div className='confirmation'>
            <div className='image' align="center" >
                <img style={{width:"300px", height:"auto"}} src={`${config.url}/artimage/${artData.file}`} alt="art_image" />
            </div> 
            <div>
                <div className="artname">
                    <span style={{marginLeft:"3%"}}>{artData.title}</span> 
                </div>
                <button className='pay' onClick={handlePayment}>Pay Now</button>
            </div>
            </div>
        </div>
    );
};

export default Payment;