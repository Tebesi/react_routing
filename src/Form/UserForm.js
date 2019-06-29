import React, { Component } from 'react'
import UserDetails from './UserDetails'
import MoreUserDetails from './MoreUserDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        age: null,
        email: "",
        school: "",
        schoolYear: "",
        postalCode:"",
        city:""
    }
    nextStep = () => {
        const {step} =this.state
        this.setState({step:step + 1})
    }
    prevStep = () => {
        const {step} =this.state
        this.setState({step:step - 1})
    }
    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }
    render() {
        const {step}=this.state
        const { firstName, lastName, age, email, school, schoolYear, postalCode } = this.state
        const values ={firstName, lastName, age, email, school, schoolYear, postalCode}
    switch (step) {
        case 1:
            return (
                <UserDetails nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}/>
            )
        case 2:
            return (
                <MoreUserDetails
                    nextStep={this.nextStep} prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
            )
        case 3:
            return (
                <Confirm
                    nextStep={this.nextStep} prevStep={this.prevStep}
            values={values}/>
            )
        default:
            return (
                <Success/>
            )
    }
  }
}

export default UserForm
