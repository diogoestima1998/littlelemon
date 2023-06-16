import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './API';
import React, { useState, useReducer, useEffect } from 'react';
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

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

/* FORM ERROR MESSAGES VALIDATION  */
const NameErrorMessage = () => {
  return (
  <p className="FieldError">Name should have at least 3 characters</p>
  );
};

const EmailErrorMessage = () => {
  return (
  <p className="FieldError">Insert a valid email</p>
  );
};

const PhoneErrorMessage = () => {
  return (
  <p className="FieldError">Insert a country and phone number</p>
  );
};

const GuestErrorMessage = () => {
  return (
  <p className="FieldError">Number of guests must be between 1 - 10</p>
  );
};



const BookingForm = () => {
  const [name, setName] = useState({ value: '', isTouched: false });
  const [email, setEmail] = useState({ value: '', isTouched: false });
  const [phoneNumber, setPhoneNumber] = useState({ value: '', isTouched: false });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState({ value: '1', isTouched: false });
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
    return emailRegex.test(email.value);
  };
  // Function to validate phone number (using a simple regular expression)
  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.value && isValidPhoneNumber(phoneNumber.value);
  };

  useEffect(() => {
    // Update form validity whenever the fields change
    const dateValid = date !== '';
    const timeValid = time !== '';
    const guestsValid = guests.value > 0 && guests.value <=10;
    const nameValid = validateName(name);
    const emailValid = validateEmail(email);
    const phoneNumberValid = validatePhoneNumber(phoneNumber);

    console.log('------------------------------');
    console.log('nameValid:', nameValid);
    console.log('emailValid:', emailValid);
    console.log('phoneNumberValid:', phoneNumberValid);
    console.log('dateValid:', dateValid);
    console.log('timeValid:', timeValid);
    console.log('guestsValid:', guestsValid);


    setIsFormValid(dateValid && timeValid && guestsValid && nameValid && emailValid && phoneNumberValid);
  }, [date, time, guests, name, email, phoneNumber]);

  const handleSubmission = () => {
    if (!isFormValid) return;

    const formData = { date, time, guests, occasion, name: name.value, email: email.value, phoneNumber: phoneNumber.value };

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
            placeholder='Enter Name'
            required
          />
          {name.isTouched && name.value.length <3 ? (<NameErrorMessage/>): null}
        </div>

        <div className='Field'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={(e) => setEmail({ value: e.target.value, isTouched: email.isTouched })}
            onBlur={() => { setEmail({value: email.value, isTouched: true})}}
            placeholder='Enter Email'
            required
          />
          {email.isTouched && !validateEmail(email) ? (<EmailErrorMessage/>): null}
        </div>

        <div className='Field'>
          <label htmlFor="phone">Phone Number</label>
          <PhoneInput
            placeholder="Enter phone number"
            type="tel"
            id="phone"
            value={phoneNumber.value}
            onChange={(phone) => setPhoneNumber({ value: phone, isTouched: phoneNumber.isTouched })}
            onBlur={() => { setPhoneNumber({value: phoneNumber.value, isTouched: true})}}
            required
          />
          {phoneNumber.isTouched && !(phoneNumber.value && isValidPhoneNumber(phoneNumber.value)) ? (<PhoneErrorMessage/>): null}
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
            value={guests.value}
            onChange={(e) => setGuests({ value: e.target.value, isTouched: guests.isTouched })}
            onBlur={() => { setGuests({value: guests.value, isTouched: true})}}
            required
          />
          {guests.isTouched && !(guests.value > 0 && guests.value <= 10) ? (<GuestErrorMessage/>): null}
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
