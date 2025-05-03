import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count : 0 }
    }

    increament = () => {
        this.setState({ count : this.state.count + 1})
    }
    decreament = () => {
        this.setState({count :  this.state.count - 1})
    }
    reset = () => {
        this.setState({count : 0})
    }
  render() {
    return (
      <div>
        <h1> count : {this.state.count}</h1>
        <button  onClick={this.increament}>Inreament</button>
        <button onClick={this.decreament}> Decremanent</button>
        <button onClick={this.reset}>Reset</button>
        
      </div>
    )
  }
}

export default Counter
