export default function Index() {
  return (
    <form>
      <p>Ids + Label with Input</p>
      
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
        <label>Extra Input to Show example without IDs<input/></label>
      </fieldset>

      <button type="submit">Create User</button>
    </form>
  );
}
