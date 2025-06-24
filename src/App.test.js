import { render, screen } from '@testing-library/react';
import App from './App';
import HomePage from './Page/Home';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
