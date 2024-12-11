import React from 'react';
import '../App.css';
import { Button } from './Button';
import "./intro.css"
import video from "./homebg.mp4"

function Intro() {
  return (
    <div className='intro-container'>
      <video src={video} autoPlay loop muted />
      <h1>Discover Your Artistic Odyssey</h1>
      <p>What are you waiting for?</p>
      <div className='intro-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Intro;
