import React from 'react'
import cook from '../images/cook.png'
import './App.css'

function About() {
  return (
    <section className='container'>
      <div className='row'>
          <div className='col-lg-6'>
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <article className='article-style'>
            At our restaurant, we are passionate about preserving the rich culinary heritage of the Mediterranean region. <br/><br/>

Our dedicated team has carefully curated a menu that showcases authentic flavors and ingredients, prepared with a contemporary touch.<br/><br/>

From the moment you step through our doors, you'll be greeted with warm hospitality and a cozy ambiance that reflects our commitment to creating a welcoming environment for our guests.
            </article>
          </div>
          <div className='col-lg-6'>
            <div className='image-wrap'>
             <img src={cook} alt="" className='img-about'/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About