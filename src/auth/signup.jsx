import React from "react";

const SignUp = () => {
  return (
    <div>
      <form class="login">
        <h2>Sign Up</h2>
        <p>Please enter details</p>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Name" />
        <input type="submit" value="Sign up" />
        <div class="links">
          <a href="#">Forgot password</a>
          <a href="#">Register</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
