import React, { Component } from 'react'

class Counter extends Component {

  /////////LONG WAY OF DOING IT
  // constructor() {
  //   super()
  //   this.state = {
  //     counter: 0 // initial state of component

  //   }
  //   this.incrementCount = this.incrementCount.bind(this)////connects "this" to parent function of component so its avbailble in nested functions
  //   this.decrementCount = this.decrementCount.bind(this)
  //   this.resetCount = this.resetCount.bind(this)
  // }

  // incrementCount() {
  //   // console.log('Increase count by 1')
  //   this.setState({ counter: this.state.counter + 1 })
  // }

  // decrementCount() {
  //   this.setState({ counter: this.state.counter - 1 })
  // }

  // resetCount() {
  //   this.setState({ counter: 0 })
  // }

 /////////////SHORT WAY
    state = { counter: 0 }

    incrementCount = () => {
      this.setState({ counter: this.state.counter + 1})
    }

    decrementCount = () => {
      this.setState({ counter: this.state.counter - 1 })
    }

    resetCount = () => {
      this.setState({ counter: 0 })
    }


  render() {
    return (
      <div style={{ margin: '0 auto', width: '50%', textAlign:'center' }}>
        <h1>{this.state.counter}</h1>
        <div>
          <button onClick={ this.incrementCount }>Increase</button>
          <button onClick={ this.decrementCount }>Decrease</button>
          <button onClick={ this.resetCount }>Reset</button>
        </div>
      </div>
    )
  }
}

export default Counter
