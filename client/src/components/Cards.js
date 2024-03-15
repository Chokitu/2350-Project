import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Learn More</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ai-basics.webp'
              text='Learn about the basics of AI'
              path='/services'
            />
            <CardItem
              src='images/tools.webp'
              text='Get tool recommendations for all your projects'
              path='/products'
            />
            <CardItem
              src='images/tutorials.webp'
              text='Watch tutorials on how to use AI in your projects'
              path='/sign-up'
            />
            <CardItem
              src='images/community.webp'
              text='Connect with other developers in the community'
              path='/services'
            />
            <CardItem
              src='images/news.webp'
              text='Stay updated with the latest news in AI'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
