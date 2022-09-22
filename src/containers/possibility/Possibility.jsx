import React from 'react';
import './possibility.css';
import chef from '../../assest/chef.jpg';

const Possibility = () => {
  return (
    <div className="swadist__possibility section_padding" id="possibility">
      <div className="swadist__possibility-image">
        <img src={chef} alt="possibilityImage" />
      </div>
      <div className="swadist__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The Possibility are beyond your imaginetion
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est velit soluta eos inventore deserunt blanditiis ullam unde optio quod dolore?</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility