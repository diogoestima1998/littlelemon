import React from 'react'
import Food from "../images/food.jpg";
import ButtonHero from './ButtonHero';

const Hero2 = () => {
  return (
    <div className='hero2__container'>
        <div className='hero2__row'>
            <div className='hero2__column'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div className='hero2__ButtonHero'>
                    <ButtonHero/>
                </div>
            </div>

            <div className='hero2__column-img'>
                <img className='hero2__img_style' src={Food} alt="Food" />
            </div>
        </div>
    </div>
  )
}

export default Hero2