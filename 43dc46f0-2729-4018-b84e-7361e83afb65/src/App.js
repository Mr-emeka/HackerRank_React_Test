import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
    };
  }
  setFormValid = (value) => this.setState({ isFormValid: value });
  render() {
    return (
      <div>
        <Form setFormValid={this.setFormValid}></Form>
        <Message isFormValid={this.state.isFormValid}></Message>
      </div>
    );
  }
}

export default App;
