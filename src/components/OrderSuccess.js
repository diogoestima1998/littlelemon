import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import HeroForm from './HeroForm';

function OrderSuccess() {
  return (
    <div>
        <Nav/>
        <HeroForm/>
        <h3 className='orderSuccess'>Reservation successful!</h3>
        <Footer/>
    </div>
  )
}

export default OrderSuccess