import React from 'react';
import './cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Exquisite Artworks: Immerse Yourself in Epic Creations.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text="Each stroke tells a story, whispered in hues that dance upon the canvas, revealing the timeless beauty of the soul's expression."
              label='Paintings'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text="Carved from the raw essence of life, each sculpture stands as a testament to the artist's mastery, freezing fleeting moments into eternal beauty."
              label='Sculpture'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Moments captured, memories eternalized, in the dance of light and shadow.'
              label='Photography'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='where imagination takes flight, transcending boundaries and inviting interpretation.'
              label='Abstract'
              path='/'
            />
            <CardItem
              src='images/img-7.jpg'
              text="Lines and shadows converge, breathing life into imagination's embrace."
              label='Drawings'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
