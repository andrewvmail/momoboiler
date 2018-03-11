import React, {Component, version} from 'react'
import {render} from 'react-dom'
import {Page, Toolbar, Button} from 'react-onsenui'

class Clock extends Component {
  constructor() {
    super()
    // set initial time:
    this.state = {
      time: Date.now()
    }
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({time: Date.now()})
    }, 1000)
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer)
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString()
    return (
      <div>
        <h3>{'Momo Boilerplate'}</h3>
        <span>{'React version: ' + version}</span>
        <br/>
        <span>{time}</span>
        <br/>
        <Button style={{margin: '6px'}}>Test button</Button>
      </div>
    )
  }
}

// render an instance of Clock into <body>:
render(<Clock/>, document.getElementById('app'))
