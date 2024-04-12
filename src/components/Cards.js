import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import aiBasics from './images/ai-basics.png';
import tools from './images/tools.png';
import tutorials from './images/tutorials.png';
import community from './images/community.png';
import news from './images/news.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Learn More</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={aiBasics}
              text='Learn about the basics of AI'
              path='/services'
            />
            <CardItem
              src={tools}
              text='Get tool recommendations for all your projects'
              path='https://zapier.com/blog/best-ai-productivity-tools/'
            />
            <CardItem
              src={tutorials}
              text='Watch tutorials on how to use AI in your projects'
              path='https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_fwe9AabjZI1RjI'
            />
            <CardItem
              src={community}
              text='Connect with other developers in the community'
              path='https://globalai.community/'
            />
            <CardItem
              src={news}
              text='Stay updated with the latest news in AI'
              path='https://www.wsj.com/tech/ai'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
