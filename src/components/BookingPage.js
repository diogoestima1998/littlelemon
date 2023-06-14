import Nav from './Nav';
import BookingForm from './BookingForm';
import HeroForm from './HeroForm';
import Footer from './Footer';
import React, { useState } from 'react';

function BookingPage() {

  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  
  return (
    <div>
        <Nav/>
        <HeroForm/>
        <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        <Footer/>
    </div>
  )
}

export default BookingPage