import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <AppBar title="Confirm" />
            <h1> Your Application has been Submitted</h1>
            <p>You will hear from us as soon as it is processed</p>
      </MuiThemeProvider>
    )
  }
}

export default Success
