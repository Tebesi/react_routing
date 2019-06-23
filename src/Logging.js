import React, { Component } from 'react'

export class Logging extends Component {
    state = {
        isLoggedIn:true
    }
    handleClick = () => {
        this.setState((prevState) => {
            return {
                isLoggedIn:!prevState.isLoggedIn
            }
        })
    }
    render() {
        let buttonColor = this.state.isLoggedIn ? { backgroundColor: "red" } : { backgroundColor: "green" }
        let buttonDisplay = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let text=this.state.isLoggedIn?"logged in":"logged out"
    return (
      <div>
            <button style={buttonColor} onClick={this.handleClick}>{buttonDisplay}</button>
            <h3>You are {text}</h3>
      </div>
    )
  }
}

export default Logging
