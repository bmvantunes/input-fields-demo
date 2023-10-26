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
      <p>Add onSubmit and show no data, because no name on inputs</p>

      <fieldset>
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" />
      </fieldset>

      <fieldset>
        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" />
      </fieldset>

      <fieldset>
        <label htmlFor="age">age</label>
        <input id="age" />
      </fieldset>

      <fieldset>
        <label>
          Extra Input to Show example without IDs
          <input />
        </label>
      </fieldset>

      <button type="submit">Create User</button>
    </form>
  );
}
