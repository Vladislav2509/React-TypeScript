import React from 'react';
import { render, screen } from '@testing-library/react';

import PostLists from './components/inputs/PostLists2/PostLists';

test('renders learn react link', () => {
  render(<PostLists />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
