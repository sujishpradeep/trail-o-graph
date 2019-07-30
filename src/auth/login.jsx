import React from "react";
import "../login.css";
import auth from "../services/authservice";
import Form from "../common/forms";
const Joi = require("joi");

class Login extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  doSubmit = async () => {
    const { error } = this.validateUser();
    if (error) {
      const errors = {};
      for (let item of error.details) errors[item.path[0]] = item.message;
      this.setState({ errors: errors });
      return;
    }

    try {
      await auth.login(this.state.data);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  validateUser = () => {
    const user = this.state.data;
    const schema = {
      username: Joi.string()
        .required()
        .min(3),
      password: Joi.string()
        .min(3)
        .required(),
      isAdmin: Joi.optional()
    };
    const options = { abortEarly: false };
    return Joi.validate(user, schema, options);
  };
  render() {
    return (
      <div>
        <form className="login" onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          {this.renderInput("text", "username", "@username")}
          {this.renderInput("password", "password", "password")}
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
