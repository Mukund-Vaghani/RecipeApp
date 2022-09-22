import React from 'react';
import './header.css';
import dish from "../../assest/dish.jpg";
import people from "../../assest/people.png";

const Header = () => {
  return (
    <div className= "swadist__header section__padding" id="home">
      <div className="swadist__header-content">
        <h1 className="gradient__text">
          Let's Cook Something Delicious with SWADIST's Recipes
        </h1>
        <p>A good chef is someone whose relationship with recipe books is just like that between a race-car driver and the car’s driving manual. There comes a point when it is just a piece of paper.</p>
        <div className="swadist__header-content__input">
          <input type="email" plcaeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className='swadist__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="swadist__header-image">
        <img src={dish} alt="dish"/>
      </div>
    </div>
  )
}

export default Header