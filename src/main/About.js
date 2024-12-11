import React from 'react'
import "./about.css"

export default function About() {
  return (
    <div className='about_container'>
        <div className='about'>
      <h1>About Us</h1>
      <p>Welcome to KALASTHALI Online Art Gallery! Here you can learn more about who we are and what we do.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to provide high-quality Arts to our customers and to make a positive impact in the community.</p>
      <h2>Our Team</h2>
      <p>Meet the dedicated team behind our WebPage:</p>
      <ul id='about'>
      <li><a href="https://www.linkedin.com/in/sagi-venkata-sai-narasimha-raju/">S Narasimha Raju</a> - Team Leader,Designer</li>
      <li><a href="https://www.linkedin.com/in/sampath-jalla-09aa5224b/">J Sampath</a> - FrontEnd Developer</li>
      <li><a href="https://www.linkedin.com/in/pachigolla-anand-vijay-kumar-gupta-3968b52b2/">P Anand</a> - BackEnd Developer</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to contact us at:</p>
      <p>Email: <a href='https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHDVKJLLdvXDPrtPZbGMdBJTxFphpTWdjfdTzcdSZpvLGkdknBMQjTgCvmxWnFmPzG'>rajunarasimha017@gmail.com</a></p>
      <p>Phone: +91 8555924113</p>
    </div>
    </div>
  )
}
