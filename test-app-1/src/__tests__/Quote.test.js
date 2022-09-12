import { render, screen } from '@testing-library/react';
import { Quote } from '../components';

test('renders text', () => {
  render(<Quote quote='An inspiring quote' />);
  expect(screen.getByText('An inspiring quote')).toBeInTheDocument();
});
