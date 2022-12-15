import { fireEvent, render, screen } from '@testing-library/react';
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

test('When the - button is pressed, the counter changes to -1', () => {
  render(<App />);
  const minusBtnElem = screen.getByTestId('minus-button');
  fireEvent.click(minusBtnElem);

  // Is counter plus 1?
  const counterElem = screen.getByTestId('counter');
  expect(counterElem).toHaveTextContent(-1);
});

test('When the + button is pressed, the counter changes to 1', () => {
  render(<App />);
  const plusBtnElem = screen.getByTestId('plus-button');
  fireEvent.click(plusBtnElem);

  // Is counter plus 1?
  const counterElem = screen.getByTestId('counter');
  expect(counterElem).toHaveTextContent(1);
});

test('on/off button has correct text', () => {
  render(<App />);
  const onOffBtn = screen.getByTestId('onOff-button');
  expect(onOffBtn).toHaveTextContent('on/off');
});

test('on/off button has blue background color', () => {
  render(<App />);
  const onOffBtn = screen.getByTestId('onOff-button');
  expect(onOffBtn).toHaveStyle({ background: 'blue' });
});

test('on/off button disabled when it fire', () => {
  render(<App />);
  const onOFfBtn = screen.getByTestId('onOff-button');
  fireEvent.click(onOFfBtn);

  const minus = screen.getByTestId('minus-button');
  const plus = screen.getByTestId('plus-button');

  expect(minus).toBeDisabled();
  expect(plus).toBeDisabled();
});
