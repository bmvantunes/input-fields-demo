import { render, screen } from '@testing-library/react';
import MyForm from './page';

describe('Create User Form', () => {
  it('just a BAD, very BAD test for now...', () => {
    render(<MyForm />);

    const firstName = screen.getByRole('textbox', {name: 'First Name'});
    expect(firstName).toBeRequired();
    expect(firstName).toHaveAccessibleErrorMessage('This is a message about an error in your input');

    const age = screen.getByRole('spinbutton', {name: 'Age'});
    expect(age).toBeRequired();
    expect(age).toHaveAccessibleDescription('You should be between 18 and 100 years old - This adds a description')

    const lastName = screen.getByRole('textbox', {name: 'This is your family Name - This replaces your Label'});
    expect(lastName).toBeRequired();

    const submitButton = screen.getByRole('button', {name: 'Create User'});
    expect(submitButton).toBeInTheDocument();
  });
});
