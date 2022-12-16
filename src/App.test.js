import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('The counter starts at 0', () => {
  render(<App />);
  // const counterElem = screen.getByTestId('counter');
  // expect(counterElem).toHaveTextContent(0);
});
