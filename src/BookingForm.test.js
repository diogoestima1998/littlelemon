/* import { render, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import BookingForm from './components/BookingForm';

test('renders the BookingForm and tests form submission', async () => {
  const mockSubmit = jest.fn();

  // Create a memory history for use in the Router
  const history = createMemoryHistory()

  const { getByLabelText, getByText } = render(
    // Render the BookingForm inside a Router
    <Router history={history}>
      <BookingForm submitAPI={mockSubmit} />
    </Router>
  );

  const dateInput = getByLabelText(/choose date/i);
  const timeInput = getByLabelText(/choose time/i);
  const guestsInput = getByLabelText(/number of guests/i);
  const occasionInput = getByLabelText(/occasion/i);
  const submitButton = getByText(/make your reservation/i);

  fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
  fireEvent.change(timeInput, { target: { value: '18:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });
  fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });
  fireEvent.click(submitButton);

  await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
});
 */