import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import LoginRegistration from './components/inputs/LoginRegistration/LoginRegistration';
import Success from './components/inputs/success/Success';


test('renders learn react link', () => {
  // render(<App />);
  render(<LoginRegistration />)
  render(<Success />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
