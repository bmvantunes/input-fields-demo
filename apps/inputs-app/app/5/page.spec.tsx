import { render, screen } from '@testing-library/react';
import MyForm from './page';

describe('Create User Form', () => {
  it('just a BAD, very BAD test for now...', () => {
    render(<MyForm />);
    const inputfields = screen.getAllByRole('textbox');
    expect(inputfields).toHaveLength(3);

    const submitButton = screen.getByRole('button', {name: 'Create User'});
    expect(submitButton).toBeInTheDocument();
  });
});
