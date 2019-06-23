import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count:0
    }
    handleChange = () => {
        this.setState((prevState) => {
            return {count:prevState.count + 1
        }
            
            })
        }

    render() {
        const numberType = this.state.count % 2 === 0 ? "EVEN" : "ODD"
        const wordDisplay=this.state.count%2===0?{color:"green"}:{color:"red"}
    return (
        <div>
            <h1 style={wordDisplay}>{this.state.count} is an {numberType} number</h1>
        <button onClick={this.handleChange}>COUNTER</button>
      </div>
    )
  }
}

export default Counter
