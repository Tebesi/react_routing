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
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
      const {values,handleChange}=this.props
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="More Applicant Details" />
                <TextField hintText="Enter Your Email"
                    floatingLabelText="Email"
                 onChange={handleChange("email")}
                    defaultValue={values.email} />
                <br />
                <TextField
                    hintText="Enter Your School"
                    floatingLabelText="School"
                 onChange={handleChange("school")}
                    defaultValue={values.school} />
                <br />
                <TextField
                    hintText="Enter Your SchoolYear"
                    floatingLabelText="SchoolYear"
                 onChange={handleChange("SchoolYear")}
                    defaultValue={values.schoolYear} />
                 <br />
                <TextField hintText="Enter Your City"
                    floatingLabelText="City"
                 onChange={handleChange("city")}
                    defaultValue={values.city} />
                  <br />
                <RaisedButton label="PREVIOUS" primary={false}
                    onClick={this.back} />
    
                <RaisedButton label="NEXT" primary={true}
                    onClick={this.continue}/>
            </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default UserDetails