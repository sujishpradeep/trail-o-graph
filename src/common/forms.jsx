import React, { Component } from "react";

class Form extends Component {
  state = { data: {}, errors: {} };

  handleSubmit = e => {
    e.preventDefault();
    this.doSubmit();
  };

  handleChange = e => {
    const { data, errors } = this.state;
    data[e.target.name] = e.target.value;

    delete errors[e.target.name];
    this.setState({ data, errors });
  };

  renderInput(type, name, placeholder) {
    const { errors } = this.state;
    const error = errors[name];

    return (
      <React.Fragment>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={this.handleChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </React.Fragment>
    );
  }
}

export default Form;
