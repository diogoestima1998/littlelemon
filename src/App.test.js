/* import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make Your Reservation");
    expect(headingElement).toBeInTheDocument();
})

/* 
import { render, screen } from "@testing-library/react";
import BookingForm, { initializeTimes, updateTimes } from './components/BookingForm';

// Test for static text in BookingForm component
test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

// Test for initializeTimes function
test('Returns the expected value from initializeTimes', () => {
  const initialState = {
    times: [],
    selectedDate: "2023-06-15",
    // Other properties in the state
  };
  const expectedTimes = ["09:00", "10:00", "11:00"];
  const updatedState = initializeTimes(initialState);
  expect(updatedState.times).toEqual(expectedTimes);
});

// Test for updateTimes function
test('Returns the same value provided in the state from updateTimes', () => {
  const initialState = {
    times: ["09:00", "10:00", "11:00"],
    selectedDate: "2023-06-15",
    // Other properties in the state
  };
  const updatedState = updateTimes(initialState);
  expect(updatedState.times).toEqual(initialState.times);
}); */
