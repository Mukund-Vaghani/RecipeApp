
import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatSWADIST.css';

const WhatSWADIST = () => {
  return (
    <div className='swadist__whatSWADIST section__margin' id="whswadist">
      <div className='swadist__whatSWADIST-feature'>
        <Feature title="What is SWADIST" text="The SWADIST is the Recipe App which containt best Recipe. You can cook Your meal by following the recipe steps."/>
      </div>
      <div className="swadist__whatSWADIST-header">
        <h1 className='gradient__text'>
          Cooking is an Art and You are the artist, Who can make their art Beautiful.
        </h1>
        <p><a href="#blog">Eaxplore The Recipes</a></p>
      </div>
      <div className="swadist__whatSWADIST-container">
        <Feature title="Chatboats" text="This is a Chatoats text"/>
        <Feature title="Knowledgebase" text="This is a Knowledgebase text"/>
        <Feature  title="Eduction" text="This is a Education text"/>
      </div>
    </div>
  )
}

export default WhatSWADIST