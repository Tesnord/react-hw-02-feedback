import React from 'react'
import Controls from './Controls'
import Value from './Value'

class Feedback extends React.Component {

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


  clickGood = event => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }))
  }

  clickNeutral = event => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }))
  }

  clickBad = event => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
    }))
  }

  eventBtn = [
    {
      key: "good",
      event: this.clickGood
    },
    {
      key: "neutral",
      event: this.clickNeutral
    },
    {
      key: "bad",
      event: this.clickBad
    }
  ]

  render() {
    return (
      <div>
        <Value
          valueGood={this.state.good}
          valueNeutral={this.state.neutral}
          valueBad={this.state.bad} />
        <Controls
        />
      </div>
    )
  }
}

export default Feedback