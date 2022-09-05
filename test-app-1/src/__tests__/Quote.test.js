import { render, screen } from '@testing-library/react';
import { Quote } from '../components';

test('always displaying text', () => {
  render(<Quote quote='An inspiring quote' />);
  expect(screen.getByText('An inspiring quote')).toBeInTheDocument();
});
