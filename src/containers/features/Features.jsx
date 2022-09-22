import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featureData = [
  {
    title:'Brakefast',
    text:'Breakfast is the first meal of the day usually eaten in the morning. The word in English refers to breaking the fasting period of the previous night.',
  },
  {
    title:'Brunch',
    text:'Brunch is a meal eaten between 10:00 a.m. and 11:59 a.m. The word brunch is a portmanteau of breakfast and lunch. Brunch originated in England in the late 19th century, and became popular in the United States in the 1930s.',
  },
  {
    title:'Lunch',
    text:'Lunch is a meal eaten around midday. During the 20th century, the meaning gradually narrowed to a meal eaten midday. Lunch is commonly the second meal of the day, after breakfast.',
  },
  {
    title:'Dinner',
    text:'Dinner usually refers to what is in many Western cultures the largest and most formal meal of the day, which is eaten in the evening.',
  }
]

const Features = () => {
  return (
    <div className="swadist__features section__padding" id="features">
      <div className="swadist__features-heading">
        <h1 className="gradient__text">Cooking is now Being Hobby of Everyone</h1>
        <p>Plan Your meal as Your Time</p>
      </div>
      <div className="swadist__features-container">
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Features