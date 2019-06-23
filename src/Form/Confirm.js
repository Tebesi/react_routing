import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
      const {values:{firstName, lastName, age, email, school, schoolYear, postalCode}}=this.props
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="More Applicant Details" />
                <List>
                    <ListItem primaryText="First Name" secondaryText={firstName} />
                    <ListItem primaryText="Last Name" secondaryText={lastName} />
                    <ListItem primaryText="Age" secondaryText={age} />
                    <ListItem primaryText="Email" secondaryText={email} />
                    <ListItem primaryText="School" secondaryText={school} />
                    <ListItem primaryText="School Year" secondaryText={schoolYear} />
                    <ListItem primaryText="Postal Code" secondaryText={postalCode}/>
                </List>
                <RaisedButton label="PREVIOUS" primary={false}
                    onClick={this.back} />
    
                <RaisedButton label="CONFIRM & CONTINUE" primary={true}
                    onClick={this.continue}/>
            </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Confirm