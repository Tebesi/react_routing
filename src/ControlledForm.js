import React, { Component } from 'react'
import FormRender from './FormRender';

export class ControlledForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        age: "",
        Student: false,
        gender:"",
        email: "",
        school:""
    }
    handleChange = (e) => {
        const {name,value,type,checked}=e.target
        type==="checkbox"?this.setState({name:checked}):this.setState({
            [name]:value
        })
    }
  render() {
    return (
        <FormRender handleChange={this.handleChange} {...this.state}/>
    )
  }
}

export default ControlledForm
