import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bruchetta from "../images/bruchetta.svg";
import salad from "../images/greek-salad.jpg";
import dessert from "../images/lemon-dessert1.jpg";

const Highlights2 = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/menu');
    };

  return (
    <>
        <div>
            <div className="specials" id="menu">
                <div className="specials-head center-head">
                    <h3 className='week__specials'>Week Specials!</h3>
                </div>
            </div>
            <div className='cards__highlights2'>
                <div className='card__highlights2'>
                    <img src={salad} alt="salad" />
                    <div className='card__highlights2-text'>
                        <h2>Greek Salad</h2>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                    </div>
                </div>

                <div className='card__highlights2'>
                    <img src={bruchetta} alt="bruchetta" />
                    <div className='card__highlights2-text'>
                        <h2>Greek Salad</h2>
                        <p>Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.
                        </p>
                    </div>
                </div>

                <div className='card__highlights2'>
                    <img src={dessert} alt="dessert" />
                    <div className='card__highlights2-text'>
                        <h2>Lemon Cake</h2>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                    </div>
                </div>
                <button onClick={handleClick} className="yellowBtn">Online Menu</button>

            </div>

        </div>
    </>
  )
}

export default Highlights2