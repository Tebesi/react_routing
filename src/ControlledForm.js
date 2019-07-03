import React, { Component } from "react";
import FormRender from "./FormRender";

export class ControlledForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: null,
    Student: false,
    gender: "",
    email: "",
    school: ""
  };
  handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (name === "age") {
      if (value !== Number) {
        alert("Age MUST be a number!!");
      }
    }
    type === "checkbox"
      ? this.setState({ name: checked })
      : this.setState({
          [name]: value
        });
  };
  render() {
    return <FormRender handleChange={this.handleChange} {...this.state} />;
  }
}

export default ControlledForm;
