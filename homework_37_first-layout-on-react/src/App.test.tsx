import React from 'react';
import { render, screen } from '@testing-library/react';
// =======================================================================
import Hamburger from './components/inputs/hamburger/Hamburger';
import MainPage from './components/inputs/mainPage/MainPage';

test('renders learn react link', () => {
  render(<Hamburger />);
  render(<MainPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
