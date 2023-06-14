/* import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
/* 
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './components/BookingForm';

test('HTML5 validation attributes are correctly applied', () => {
  const { getByLabelText } = render(<BookingForm />);

  // Check that date input is required
  const dateInput = getByLabelText('Choose date');
  expect(dateInput).toBeRequired();

  // Check that time select is required
  const timeSelect = getByLabelText('Choose time');
  expect(timeSelect).toBeRequired();

  // Check that guests input is required, and has min and max set
  const guestsInput = getByLabelText('Number of guests');
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  // Check that occasion select is required
  const occasionSelect = getByLabelText('Occasion');
  expect(occasionSelect).toBeRequired();
});

test('Form submits correctly with valid data', () => {
  // This test assumes that you mock submitAPI function and check if it's called with correct arguments.
});

test(`Form doesn't submit with invalid data`, () => {
  // This test assumes that you mock submitAPI function and check if it's not called when form data is invalid.
});
 */

/* import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make Your Reservation");
    expect(headingElement).toBeInTheDocument();
}) */

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
