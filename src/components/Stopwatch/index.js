import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    isTimerSeconds: 0,
  }

  componentDidMount() {
    clearInterval(this.timerId)
  }

  onResetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, isTimerSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      isTimerSeconds: prevState.isTimerSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderMinutes = () => {
    const {isTimerSeconds} = this.state
    const minutes = Math.floor(isTimerSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {isTimerSeconds} = this.state
    const seconds = Math.floor(isTimerSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">StopWatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="timer-image"
              />
              <h1 className="heading">Timer</h1>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                className="button start-button"
                type="button"
                onClick={this.onStartTimer}
                disable={isTimerRunning}
              >
                Start
              </button>
              <button
                className="button stop-button"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="button reset-button"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
