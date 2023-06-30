import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import error from "../images/Error404.png";

const Error404 = () => {
  return (
    <>
        <Nav/>
        <div className='error__container'>
            <div className='error__row'>
                <div>
                    <h4 className='error__p'>Page available soon... <br /> Currently under construction.</h4>
                </div>
                <div className='error__div'>
                    <img className='error__img' src={error} alt="error" />
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Error404