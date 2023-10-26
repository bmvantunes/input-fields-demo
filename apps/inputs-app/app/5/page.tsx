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
      <p>Required Fields + aria-hidden on *</p>

      <fieldset>
        <label htmlFor="first-name">
          <span>
            First Name<span aria-hidden="true"> *</span>
          </span>
        </label>
        <input id="first-name" required name="firstName" />
      </fieldset>

      <fieldset>
        <label htmlFor="last-name">
          <span>
            Last Name<span aria-hidden="true"> *</span>
          </span>
        </label>
        <input id="last-name" required name="lastName" />
      </fieldset>

      <fieldset>
        <label htmlFor="age">
          <span>
            age<span aria-hidden="true"> *</span>
          </span>
        </label>
        <input
          id="age"
          name="age"
          required
          type="number"
          min="18"
          max="100"
        />
      </fieldset>

      <fieldset>
        <label>
          <span>
            Extra Input to Show example without IDs
            <span aria-hidden="true"> *</span>
          </span>
          <input name="extra" />
        </label>
      </fieldset>

      <button type="submit">Create User</button>
    </form>
  );
}
