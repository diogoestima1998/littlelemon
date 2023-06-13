import React from 'react'
import LogoWhite from '../images/LogoWhite.png'


function Footer() {
  return (
  
    <div className='container-wrapper-footer'>
      <div className='container container-footer '>
        <div className='row'>
          <div className='col-lg-3'>
              <img className="logoWhite" src={LogoWhite} alt="" />
          </div>
          <div className='col-lg-3'>
              <h5>Doormat Navigation</h5>
              <div className='link-footer'>
                <a href="">Home</a><br/>
                <a href="">About</a><br/>
                <a href="">Menu</a><br/>
                <a href="">Reservations</a><br/>
                <a href="">Order Online</a><br/>
                <a href="">Login</a><br/>
              </div>
          </div>
          <div className='col-lg-3'>
              <h5>Contact</h5>
              <div className='link-footer'>
                <a href="#">Address</a><br/>
                <a href="#">Phone number</a><br/>
                <a href="#">Email</a><br/>
              </div>
          </div>
          <div className='col-lg-3'>
              <h5>Social Media Links</h5>
              <div className='link-footer'>
                <a href="#">Instagram</a><br/>
                <a href="#">Pinterest</a><br/>
                <a href="#">Facebook</a><br/>
                <a href="#">Twitter</a><br/>
                <a href="#">Tiktok</a><br/>
              </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Footer