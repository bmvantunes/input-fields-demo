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
      <p>Error + Description + Label + Unit Test</p>

      <fieldset>
        <label htmlFor="first-name">
          <span>
            First Name<span aria-hidden="true"> *</span>
          </span>
        </label>
        <input
          id="first-name"
          required
          name="firstName"
          aria-invalid="true"
          aria-errormessage="first-name-error"
        />
        <span className="error" id="first-name-error">This is a message about an error in your input</span>
      </fieldset>

      <fieldset>
        <label htmlFor="last-name">
          <span>
            Last Name<span aria-hidden="true"> *</span>
          </span>
        </label>
        <input
          id="last-name"
          required
          name="lastName"
          aria-labelledby="last-name-label-replacement"
        />
        <span id="last-name-label-replacement">This is your family Name - This replaces your Label</span>
      </fieldset>

      <fieldset>
        <label htmlFor="age">
          <span>
            Age<span aria-hidden="true"> *</span>
          </span>
        </label>
        <input
          id="age"
          name="age"
          required
          type="number"
          min="18"
          max="100"
          aria-describedby="age-description"
        />
        <span id="age-description">
          You should be between 18 and 100 years old - This adds a description
        </span>
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
