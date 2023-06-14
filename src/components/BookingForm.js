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

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  // Add state for field validity
  const [isFormValid, setIsFormValid] = useState(false);

  const initialAvailableTimes = fetchAPI(new Date());

  const [availableTimes, dispatchTimes] = useReducer(reducer, initialAvailableTimes);

  const navigate = useNavigate();

  useEffect(() => {
    // Update form validity whenever the fields change
    const dateValid = date !== '';
    const timeValid = time !== '';
    const guestsValid = guests > 0 && guests <=10;
    setIsFormValid(dateValid && timeValid && guestsValid);
  }, [date, time, guests]);

  const handleSubmission = () => {
    if (!isFormValid) return;

    const formData = { date, time, guests, occasion };
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
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
          {availableTimes.map((availableTime) => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>

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

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <button type="button" onClick={handleSubmission} disabled={!isFormValid}>
          Make Your reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
