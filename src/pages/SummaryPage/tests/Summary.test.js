import { render, screen } from '@testing-library/react';
import { SummmaryPage } from '../SummaryPage';

test('Checkbox and Button test', () => {
  render(<SummmaryPage />);
  const checkbox = screen.getByRole('checkbox', {
    name: '주문 상품을 확인했나요?'
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole('button', { name: '주문 확인' });
  expect(confirmButton.disabled).toBeTruthy();
});
