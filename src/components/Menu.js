import React from 'react'
import Navbar from './Nav'
import { menucards } from '../constants'
import Footer from './Footer'


export const Menu = () => {
  return (
    <div>
        <Navbar/>
        <div className='hero-section'> 
            <div className='hero-content'>
                <h3 className='bookHeadline'>Menu</h3>
            </div>
        </div>
        <div className='section-cards__menu'>
            {menucards.map((card) => (
                <div className="card-menu">
                    <img className='card-menu__img' src={card.link} alt={card.title} />
                    <div className='card-menu__text'>
                        <h1>{card.title}</h1>
                        <h2>Rate: {card.rate}</h2>
                        <h2>Price: {card.price}</h2>
                    </div>
                </div>
            ))}
        </div>
        <Footer/>
    </div>
  )
}
