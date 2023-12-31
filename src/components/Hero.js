import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Food from "../images/food.jpg";
import ButtonHero from './ButtonHero'


const Hero = () => (
    <header className='container-wrapper-hero'>
      <div className='container container-hero'>
        <div className='row row-hero'>
          <div className='col-lg-6'>
            <h1 className='hero__header'>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className='mainp'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <div className='hero2__ButtonHero'>
                 <ButtonHero/>
              </div>
          </div>
          <div className='col-lg-6'>
            <img src={Food} alt="food" className='imageHero'/>
          </div>
        </div>
      </div>
    </header>
);

export default Hero;
