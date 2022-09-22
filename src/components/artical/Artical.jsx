// import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import './artical.css';

const Artical = ({ imgUrl, date, title, text }) => {
  return (
    <div className='swadist__blog-container_article'>
      <div className='swadist__blog-container_article-image'>
        <img src={imgUrl} alt="blog_image"/>
      </div>
      <div className='swadist__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
          <h4>{text}</h4>
        </div>
        <p>Read Full Recipe</p>
      </div>
    </div>
  )
}

export default Artical