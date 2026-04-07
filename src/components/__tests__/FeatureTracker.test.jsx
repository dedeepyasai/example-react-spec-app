import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureTracker from '../FeatureTracker';

test('adds a feature and displays it in the list', () => {
  render(<FeatureTracker />);

  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descInput = screen.getByPlaceholderText(/Description/i);
  const addButton = screen.getByRole('button', { name: /add feature/i });

  fireEvent.change(titleInput, { target: { value: 'Test Feature' } });
  fireEvent.change(descInput, { target: { value: 'This is a test.' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Test Feature')).toBeInTheDocument();
  expect(screen.getByText('This is a test.')).toBeInTheDocument();
});
