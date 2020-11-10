import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { validateEmail, validateUrl, validatePhone } from "../helpers";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      name: "",
      email: "",
      url: "",
      phone: "",
    };
  }

  // handle submit
  handleSubmit = (e) => {
    e.preventDefault();
    let validEmail = validateEmail(this.state.email);
    let validName = !!this.state.name;
    let validUrl = validateUrl(this.state.url);
    let validPhone = validatePhone(this.state.phone);

    if (validPhone && validUrl && validName && validEmail) {
      this.props.setFormValid(true);
    } else {
      this.props.setFormValid(false);
    }
  };
  //   handle input change
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h3>Name:</h3>
          <input
            type="text"
            name="name"
            className="name"
            onChange={this.handleChange}
          />
          <h3>Email:</h3>

          <input
            type="email"
            name="email"
            className="email"
            onChange={this.handleChange}
          />
          <h3>Phone:</h3>
          <input
            type="tel"
            name="phone"
            className="phone"
            onChange={this.handleChange}
          />
          <h3>Blog URL:</h3>
          <input
            type="url"
            name="url"
            className="ürl"
            onChange={this.handleChange}
          />

          <div
            className="small-6 small-centered text-center columns"
            onClick={this.handleSubmit}
          >
            <a href="#" className="button success expand round text-center">
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
