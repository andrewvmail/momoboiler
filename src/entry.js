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
    click: [
      function increaseCount({state}) {
        state.increment('count', 1)
      }
    ],
    reset: [
      function resetCount({state}) {
        state.set('count', 0)
      }
    ]
  }
})

const controller = Controller(app, {
  devtools: Devtools({
    host: 'localhost:8585',
    https: false,
    reconnect: true,
    storeMutations: true,
    bigComponentsWarning: 5,
    warnStateProps: true,
  })
})

const t0 = performance.now()

const Clock = connect({
    count: state`count`,
    click: signal`click`,
    reset: signal`reset`
  },
  class Clock extends Component {
    constructor() {
      super()
      // set initial time:
      this.state = {
        time: Date.now()
      }
    }

    componentWillMount(){
      // nerv hack
      if(this.vnode) {
        this.props = this.vnode.props
      }
    }

    componentDidMount() {
      // update time every second
      this.timer = setInterval(() => {
        this.setState({time: Date.now()})
      }, 1000)
      const t1 = performance.now()
      this.setState({timer: (t1 - t0)})
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
          <span>{( !this.vnode ? 'React version: ' : 'Nervjs: ' ) + version}</span>
          <br/>
          <span>{time}</span>
          <br/>
          <span>Count: {this.props.count}</span>
          <br/>
          <Button style={{margin: '6px'}} onClick={() => this.props.click()}>Test button</Button>
          <br/>
          <Button style={{margin: '6px'}} onClick={() => this.props.reset()}>Reset button</Button>
          <br/>
          <span>Time to mount: {this.state.timer}</span>
        </div>
      )
    }
  }
)
// render an instance of Clock into <body>:
render(<Container controller={controller}><Clock/></Container>, document.getElementById('app'))

