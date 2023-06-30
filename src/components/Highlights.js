import React from 'react'
import Card from "react-bootstrap/Card";
import bruchetta from "../images/bruchetta.svg";
import salad from "../images/greek-salad.jpg";
import dessert from "../images/lemon-dessert1.jpg";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from 'react-router-dom';

function Highlights() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <section>

        <div className="specials" id="menu">
          <div className="specials-head center-head">
            <h3>Week Specials!</h3>
            <button onClick={handleClick} className="yellowBtn marginTop">Online Menu</button>
        </div>
      </div>
        <div className='cards'>
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={salad} className='card-img'/>
          <Card.Body>
            <Card.Title>Greek Salad</Card.Title>
            <Card.Text>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </Card.Text>

            <Button variant=".btn.btn-primary">Order Delivery </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={bruchetta} className='card-img'/>
            <Card.Body>
              <Card.Title>Bruschetta</Card.Title>
              <Card.Text>
                Our Bruschetta is made from homemade grilled bread that has been
                smeared with garlic and seasoned with salt and olive oil. Topped
                with fresh vegetables.
              </Card.Text>
              <Button variant=".btn.btn-primary">Order Delivery </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={dessert} className='card-img'/>
            <Card.Body>
              <Card.Title>Lemon Cake</Card.Title>
              <Card.Text>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined. <i class="fa-regular fa-moped"></i>
              </Card.Text>
              <Button variant=".btn.btn-primary">Order Delivery </Button>
            </Card.Body>
          </Card>
        </div>
    </section>
  )
}

export default Highlights