import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useNavigate  } from 'react-router-dom';

const ButtonHero = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/booking');
    };
  
    return (
      <button className="yellowBtn" onClick={handleClick} type="button">
        Reserve a table
      </button>
    );
  };
  
  export default ButtonHero;