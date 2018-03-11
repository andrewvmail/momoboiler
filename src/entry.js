import React, {Component, version} from 'react'
import {render} from 'react-dom'
import {Page, Toolbar, Button} from 'react-onsenui'
import {Container, connect} from '@cerebral/react'
import {Controller, Module} from 'cerebral'
import {state, signal} from 'cerebral/tags'
import Devtools from 'cerebral/devtools'
import StorageModule from '@cerebral/storage'


const storage = StorageModule({target: localStorage, json: true, sync: {'count': 'count'}})


const app = Module({
  modules: {storage},
  state: {
    count: 0,
  },
  signals: {
    click: [function increaseCount({state}) {
      state.increment('count', 1)
    }]
  }
})

const controller = Controller(app, {
  // devtools: Devtools({
  //   host: 'localhost:8585',
  //   https: false,
  //   reconnect: true,
  //   storeMutations: true,
  //   bigComponentsWarning: 5,
  //   warnStateProps: true,
  // })
})


const Clock = connect({
    count: state`count`,
    click: signal`click`
  },
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
          <span>Count: {this.props.count}</span>
          <br/>
          <Button style={{margin: '6px'}} onClick={() => this.props.click()}>Test button</Button>
        </div>
      )
    }
  }
)
// render an instance of Clock into <body>:
render(<Container controller={controller}><Clock/></Container>, document.getElementById('app'))
