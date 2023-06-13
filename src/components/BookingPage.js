import React from 'react'
import Nav from './Nav'
import BookingForm from './BookingForm'
import HeroForm from './HeroForm'
import Footer from './Footer'

function BookingPage() {
  return (
    <div>
        <Nav/>
        <HeroForm/>
        <BookingForm/>
        <Footer/>
    </div>
  )
}

export default BookingPage