import { render, screen } from '@testing-library/react';
import App from './App';

test('The counter starts at 0', () => {
  render(<App />);
  const counterElem = screen.getByTestId('counter');
  expect(counterElem).toHaveTextContent(0);
});

test('Minus button has correct text', () => {
  render(<App />);
  const minusElem = screen.getByTestId('minus-button');
  expect(minusElem).toHaveTextContent('-');
});

test('Plus button has correct text', () => {
  render(<App />);
  const plusElem = screen.getByTestId('plus-button');
  expect(plusElem).toHaveTextContent('+');
});
