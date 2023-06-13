import React from 'react'
import ratings from "../images/rating.png";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";
import profile4 from "../images/profile4.jpg";

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <div className='profile-container'>
              <img id="profile" src={profile1} alt="Customer Pic" />
            </div>
            <h2>Selena G.</h2>
            <p>"Really enjoyed the atmosphere."</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <div className='profile-container'>
              <img id="profile" src={profile2} alt="Customer Pic" />
            </div>
            <h2>Brandon M.</h2>
            <p>"The greek salad was excellent!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <div className='profile-container'>
              <img id="profile" src={profile3} alt="Customer Pic" />
            </div>
            <h2>Peter R.</h2>
            <p>"You have to try the Greek Salad!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <div className='profile-container'>
              <img id="profile" src={profile4} alt="Customer Pic" />
            </div>
            <h2>Neha J.</h2>
            <p>"Awesome place peaceful atmosphere and food"</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials