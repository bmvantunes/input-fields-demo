import { render, screen } from '@testing-library/react';
import MyForm from './page';
import userEvent from '@testing-library/user-event';

// in real life this is bad, we should use MSW instead of spying console.log
const spyConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => null);

describe('Create User Form', () => {
  it('renders first name with accessible error, last name, age, extra and submit button', () => {
    render(<MyForm />);

    const firstName = screen.getByRole('textbox', { name: 'First Name' });
    expect(firstName).toBeRequired();
    expect(firstName).toHaveAccessibleErrorMessage(
      'This is a message about an error in your input'
    );

    const lastName = screen.getByRole('textbox', {
      name: 'This is your family Name - This replaces your Label',
    });
    expect(lastName).toBeRequired();

    const age = screen.getByRole('spinbutton', { name: 'Age' });
    expect(age).toBeRequired();
    expect(age).toHaveAccessibleDescription(
      'You should be between 18 and 100 years old - This adds a description'
    );

    const extra = screen.getByRole('textbox', {
      name: 'Extra Input to Show example without IDs',
    });
    expect(extra).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: 'Create User' });
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form when all values are valid using keyboard', async () => {
    render(<MyForm />);
    const user = userEvent.setup();

    // now first name is where our cursor is
    await user.tab();
    await user.keyboard('Bruno');

    // last name is active
    await user.tab();
    await user.keyboard('Antunes');

    // age is active
    await user.tab();
    await user.keyboard('36');

    // extra is active
    await user.tab();
    await user.keyboard('Something on Extra Field');

    // now we will not even look for the submit button we are going to click enter and submit
    await user.keyboard('{Enter}');

    expect(spyConsoleLog).toHaveBeenCalledTimes(1);
    expect(spyConsoleLog).toHaveBeenCalledWith('Submitted Data', {
      age: '36',
      extra: 'Something on Extra Field',
      firstName: 'Bruno',
      lastName: 'Antunes',
    });
  });

  it('submits form when all values are valid using mouse', async () => {
    render(<MyForm />);
    const user = userEvent.setup();

    const firstName = screen.getByRole('textbox', { name: 'First Name' });
    const lastName = screen.getByRole('textbox', {
      name: 'This is your family Name - This replaces your Label',
    });
    const age = screen.getByRole('spinbutton', { name: 'Age' });
    const submitButton = screen.getByRole('button', { name: 'Create User' });
    const extra = screen.getByRole('textbox', {
      name: 'Extra Input to Show example without IDs',
    });

    await user.type(firstName, 'John');
    await user.type(lastName, 'Doe');
    await user.type(age, '23');
    await user.type(extra, 'What do you want me to write here???');

    // submit the form
    await user.click(submitButton);

    expect(spyConsoleLog).toHaveBeenCalledTimes(1);
    expect(spyConsoleLog).toHaveBeenCalledWith('Submitted Data', {
      age: '23',
      extra: 'What do you want me to write here???',
      firstName: 'John',
      lastName: 'Doe',
    });
  });
});
