import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Hello World/i });
  expect(button).toBeInTheDocument();
});