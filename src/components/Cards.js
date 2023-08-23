import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out My Personal Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore My Stock Calls Website'
              label='More info'
              // path='/services'
            />
            <CardItem
              src='images/fifaboticon1.jpg'
              text='My Fifa Sniping Bot'
              label='More info'
              //path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
