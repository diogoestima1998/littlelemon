import React, { useState, useReducer } from 'react';

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Define your logic to update the available times based on the selected date
      const selectedDate = new Date(action.date);
      const dayOfWeek = selectedDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

      // Set the available times based on the day of the week
      let updatedTimes = [];
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        updatedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      } else if (dayOfWeek === 6) { // Saturday
        updatedTimes = ['18:00', '19:00', '20:00', '21:00', '22:00'];
      } else { // Sunday
        updatedTimes = ['19:00', '20:00', '21:00'];
      }

      return updatedTimes;
    default:
      return state;
  }
};

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  // Replace useState with useReducer for availableTimes
  const [timesState, dispatchTimes] = useReducer(reducer, availableTimes);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform further actions, such as sending the form data to an API
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);

    // Dispatch the state change to update the available times based on the selected date
    dispatchTimes({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  return (
    <div className='form-Booking'>
      <form className="formBooking" style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          {timesState.map((availableTime) => (
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
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
