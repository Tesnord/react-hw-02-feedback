import React, { Component } from 'react'
import Buttons from './Buttons'
import Statistics from './Statistics'

class Feedback extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  static propTypes = {
    //
  }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad
  }

  increment = (eventBtn) => {
    const { name } = eventBtn.currentTarget
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }))
  }

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Buttons
          state={this.state}
          increment={this.increment}
        />
        <h2>Statistics</h2>
        {total > 0 ? (
          <Statistics state={this.state} />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    )
  }
}

export default Feedback