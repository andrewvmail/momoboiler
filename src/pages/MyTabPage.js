import React, {Component, version} from 'react'
import {render} from 'react-dom'
import {Page, Toolbar, Button, Tab, Tabbar, BottomToolbar} from 'react-onsenui'
import {connect} from '@cerebral/react'
import {state, signal} from 'cerebral/tags'

export default connect({
  count: state`count`,
  click: signal`click`,
  reset: signal`reset`
},class MyTabPageComponent extends Component {

  constructor() {
    super()
    this.state = {
      timer: 0,
      index: 0
    }
  }

  componentWillMount() {
    if (this.vnode) {
      this.props = this.vnode.props
    }
  }

  componentDidMount() {
    const t1 = performance.now()
    this.setState({timer: t1 - window.t0})
  }

  render() {
    return (
      <Page>
        <section style={{margin: '16px'}}>
          <div>
            <h3>{'Momo Boilerplate'}</h3>
            <span>{( !this.vnode ? 'React version: ' : 'Nervjs: ' ) + version}</span>
            <br/>
            <br/>
            <h1>Count: {this.props.count}</h1>
            <br/>
            <span>Time to first render: {this.state.timer}</span>
          </div>
          <p>
            {this.props.content}.
            <Button modifier='large' style={{margin: '6px'}} onClick={() => this.props.click()}>Test button</Button>
            <Button modifier='large' style={{margin: '6px'}} onClick={() => this.props.reset()}>Reset button</Button>
          </p>
        </section>
      </Page>
    );
  }
})