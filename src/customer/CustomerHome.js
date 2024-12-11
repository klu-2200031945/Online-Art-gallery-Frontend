import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button } from '../Components/Button';
import video from "../Components/homebg.mp4"
import { Link } from 'react-router-dom';
import CustomerGallery from './CustomerGallery';

export default function CustomerHome() {
  const [customerData, setCustomerData] = useState("");

  useEffect(() => {
    const storedCustomerData = localStorage.getItem('customer');
    if (storedCustomerData) {
      const parsedCustomerData = JSON.parse(storedCustomerData);
      setCustomerData(parsedCustomerData)
    }
  }, []);
  return (
    <div>
      <div className='intro-container'>
      <video src={video} autoPlay loop muted />
      <h1>Welcome {customerData.username}!</h1>
      <p>What are you waiting for?</p>
      <div className='intro-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={CustomerGallery}
        >
          Explore Gallery
        </Button>
      </div>
    </div>
    
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            KALASTHALI
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>KALASTHALI © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/https://www.facebook.com/narasimha1507'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/narasimha.sagi/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/channel/UCSOh_7cKw96ghQmx7w7aNhQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.twitter.com/narasimha2310'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/sagi-venkata-sai-narasimha-raju/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
