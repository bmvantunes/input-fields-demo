'use client';

export default function Index() {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.currentTarget);
        const data = Object.fromEntries(formData);
        console.log('Submitted Data', data);
      }}
    >
      <p>Add name and show data on submit</p>

      <fieldset>
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" name="firstName" />
      </fieldset>

      <fieldset>
        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" name="lastName" />
      </fieldset>

      <fieldset>
        <label htmlFor="age">age</label>
        <input id="age" name="age" />
      </fieldset>

      <fieldset>
        <label>
          Extra Input to Show example without IDs
          <input name="extra" />
        </label>
      </fieldset>

      <button type="submit">Create User</button>
    </form>
  );
}
