import React from "react";

const SignUpForm = (props) => {
  return (
    <form onSubmit={props.submitSignupFormHandler} id="signup-form">
      <label>Name</label>
      <input name="name" type="name" id="name"></input>
      <label>Email</label>
      <input name="email" type="email" id="email"></input>
      <label>Password</label>
      <input name="password" type="password" id="password"></input>
      <label>Password confirmation</label>
      <input
        name="passwordConfirm"
        type="passwordConfirm"
        id="passwordConfirm"
      ></input>

      <button id="submit">Sign up</button>
    </form>
  );
};
export default SignUpForm;
