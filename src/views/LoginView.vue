<template>
<div>

<div class="container">
      <header class="header">
        <h1 id="title" class="text-center">Pubg Games!</h1>
        <p id="description" class="description text-center">
          Thank you for come to Pubg Game ☺!
        </p>
      </header>
      <form id="survey-form">
        <div class="form-group">
          <label id="name-label" for="name">Name</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required="">
        </div>
        <div class="form-group">
          <label id="email-label" for="email">Email</label>
          <input type="email" name="email" id="email" class="form-control" placeholder="Enter your Email" required="">
        </div>
        <div class="form-group">
          <label id="number-label" for="number">Age<span class="clue">(optional)</span></label>
          <input type="number" name="age" id="number" min="10" max="99" class="form-control" placeholder="Age">
        </div>
        <div class="form-group">
          <p>Which option best describes your current role?</p>
          <select id="dropdown" name="role" class="form-control" required="">
            <option disabled="" selected="" value="">Select current role</option>
            <option value="student">Student</option>
            <option value="job">Full Time Job</option>
            <option value="learner">Full Time Learner</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <p>Would you recommend this form to a friend?</p>
          <label>
            <input name="user-answer" value="definitely" type="radio" class="input-radio" checked="">Yes!</label>
          <label>
            <input name="user-answer" value="maybe" type="radio" class="input-radio">Probably</label>

          <label><input name="user-answer" value="not-sure" type="radio" class="input-radio">Not sure..</label>
        </div>

        <div class="form-group">
          <p>What is your favorite genre on games?</p>
          <select id="most-like" name="mostLike" class="form-control" required="">
            <option disabled="" selected="" value="">Select a genre</option>
            <option value="survival">Survival</option>
            <option value="action">Action</option>
            <option value="community">Simulation</option>
            <option value="sports">Sports</option>
            <option value="arcade">Arcade</option>
          </select>
        </div>

        <div class="form-group">
          <p>
            What would you like from a game?
            <span class="what">(Check all that apply)</span>
          </p>

          <label><input name="prefer" value="history" type="checkbox" class="input-checkbox">History</label>
          <label>
            <input name="prefer" value="music" type="checkbox" class="input-checkbox">Music</label>
          <label><input name="prefer" value="graphics" type="checkbox" class="input-checkbox">Graphics</label>
          <label><input name="prefer" value="gameplay" type="checkbox" class="input-checkbox">Gameplay</label>
          <label><input name="prefer" value="multiplayer" type="checkbox" class="input-checkbox">Multiplayer</label>
          <label><input name="prefer" value="length" type="checkbox" class="input-checkbox">Length</label>
          <label><input name="prefer" value="other" type="checkbox" class="input-checkbox">Other..</label>
        </div>

        <div class="form-group">
          <p>What is your favourite game?</p>
          <textarea id="fav-game" class="input-textarea" name="comment" placeholder="Enter your game here..."></textarea>
        </div>
        <div class="form-group">
          <button type="submit" id="submit" class="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>





</div>
</template>


<style>



@import url("https://fonts.googleapis.com/css?family=Poppins:200i,400&display=swap");

:root {
  --color-white: #000;
  --color-darkblue: #1b1b32;
  --color-darkblue-alpha: rgba(200, 200, 220, 0.6);
  --color-darkRed: linear-gradient(
    115deg,
    rgba(255, 58, 158, 0.8),
    rgba(190, 200, 180, 0.7)
  );
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-white);
  margin: 0;
}

/* mobile friendly alternative to using background-attachment: fixed */
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: var(--color-white);
  background-image: linear-gradient(
      115deg,
      rgba(255, 58, 158, 0.8),
      rgba(190, 200, 180, 0.7)
    ),
    url(https://image.winudf.com/v2/image1/Y29tLmVkc2FwcHMuZ2FtaW5nX3dhbGxwYXBlcnNfNGtfc2NyZWVuXzNfMTYxMzgyNjQ3NF8wMDA/screen-3.jpg?fakeurl=1&type=.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

h1 {
  font-weight: 400;
  line-height: 1.2;
}

p {
  font-size: 1.125rem;
}

h1,
p {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

label {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

input,
button,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button {
  border: none;
}

.container {
  width: 100%;
  margin: 3.125rem auto 0 auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

.header {
  padding: 0 0.625rem;
  margin-bottom: 1.875rem;
}

.description {
  font-style: italic;
  font-weight: 200;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

.clue {
  margin-left: 0.25rem;
  font-size: 0.9rem;
  color: #e4e4e4;
}

.text-center {
  text-align: center;
}

/* form */

form {
  background: var(--color-darkblue-alpha);
  padding: 2.5rem 0.625rem;
  border-radius: 0.25rem;
}

@media (min-width: 480px) {
  form {
    padding: 2.5rem;
  }
}

.form-group {
  margin: 0 auto 1.25rem auto;
  padding: 0.25rem;
}

.form-control {
  display: block;
  width: 100%;
  height: 2.375rem;
  padding: 0.375rem 0.75rem;
  color: #888;
  background-color: #555;
  background-clip: padding-box;
  border: 1px solid rgba(255, 58, 158, 0.8);
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.input-radio,
.input-checkbox {
  display: inline-block;
  margin-right: 0.625rem;
  min-height: 1.25rem;
  min-width: 1.25rem;
}

.input-textarea {
  min-height: 120px;
  width: 100%;
  padding: 0.625rem;
  resize: vertical;
  border: 1px solid rgba(255, 58, 158, 0.8));
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background: var(--color-darkRed);
  color: inherit;
  border-radius: 2px;
  cursor: pointer;
}


</style>