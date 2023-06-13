import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Food from "../images/food.jpg"

const Hero = () => (
    <header className='container-wrapper-hero'>
      <div className='container container-hero'>
        <div className='row row-hero'>
          <div className='col-lg-6'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="yellowBtn" type="submit">Reserve a table</button>
          </div>
          <div className='col-lg-6'>
            <img src={Food} alt="food" className='imageHero'/>
          </div>
        </div>
      </div>
    </header>
);

export default Hero;
