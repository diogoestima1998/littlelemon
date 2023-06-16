import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './API';
import React, { useState, useReducer, useEffect } from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.date);
      const updatedTimes = fetchAPI(selectedDate);
      return updatedTimes;
    default:
      return state;
  }
};

const NameErrorMessage = () => {
  return (
  <p className="FieldError">Name should have at least 3 characters</p>
  );
};


const BookingForm = () => {
  const [name, setName] = useState({ value: '', isTouched: false });
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  // Add state for field validity
  const [isFormValid, setIsFormValid] = useState(false);

  const initialAvailableTimes = fetchAPI(new Date());

  const [availableTimes, dispatchTimes] = useReducer(reducer, initialAvailableTimes);

  const navigate = useNavigate();

  // Function to validate name (must have more than 3 letters)
  const validateName = (name) => {
    return name.value.length >= 3;
  };

  // Function to validate email (using a simple regular expression)
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // Function to validate phone number (using a simple regular expression)
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  useEffect(() => {
    // Update form validity whenever the fields change
    const dateValid = date !== '';
    const timeValid = time !== '';
    const guestsValid = guests > 0 && guests <=10;
    const nameValid = validateName(name);
    const emailValid = validateEmail(email);
    const phoneNumberValid = validatePhoneNumber(phoneNumber);

    console.log('dateValid:', dateValid);
    console.log('timeValid:', timeValid);
    console.log('guestsValid:', guestsValid);
    console.log('nameValid:', nameValid);
    console.log('emailValid:', emailValid);
    console.log('phoneNumberValid:', phoneNumberValid);

    setIsFormValid(dateValid && timeValid && guestsValid && nameValid && emailValid && phoneNumberValid);
  }, [date, time, guests, name, email, phoneNumber]);

  const handleSubmission = () => {
    if (!isFormValid) return;

    const formData = { date, time, guests, occasion, name: name.value, email, phoneNumber };

    // Log formData to the console
    console.log('Submitting the following data to the API:', formData);

    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmation');
    } else {
      // Handle submission error
    }
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    dispatchTimes({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  return (
    <div className='form-Booking'>
      <form className="formBooking" style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
        <div className='Field'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name.value}
            onChange={(e) => setName({ value: e.target.value, isTouched: name.isTouched })}
            onBlur={() => { setName({value: name.value, isTouched: true})}}
            placeholder='Name'
            required
          />
          {name.isTouched && name.value.length <3 ? (<NameErrorMessage/>): null}
        </div>

        <div className='Field'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='Field'>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className='Field'>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
        </div>
        
        <div className='Field'>
          <label htmlFor="res-time">Choose time &nbsp; </label>
          <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
            {availableTimes.map((availableTime) => (
              <option key={availableTime}>{availableTime}</option>
            ))}
          </select>
        </div>
        
        <div className='Field'>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>

        <div className='Field'>
          <label htmlFor="occasion">Occasion &nbsp; </label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>


        <button className="yellowBtn" type="button" onClick={handleSubmission} disabled={!isFormValid}>
          Make Your reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
