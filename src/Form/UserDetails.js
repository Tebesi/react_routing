import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class UserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
      const {values,handleChange}=this.props
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Applicant Details" />
                <TextField hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                 onChange={handleChange("firstName")}
                    defaultValue={values.firstName} />
                <br />
                <TextField hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                 onChange={handleChange("lastName")}
                    defaultValue={values.lastName} />
                <br />
                <TextField hintText="Enter Your Age"
                    floatingLabelText="Age"
                 onChange={handleChange("age")}
                    defaultValue={values.age} />
                <br />
                <RaisedButton label="NEXT" primary={true}
                    onClick={this.continue}/>
            </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default UserDetails
