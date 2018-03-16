import React, { Component, version } from 'react'
import { render } from 'react-dom'
import { Page, Toolbar, Button, Tab, Tabbar, BottomToolbar, Switch } from 'react-onsenui'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect({
  someState: state`settings.someState`,
  toggleSomeState: signal`settings.toggleSomeState`,
}, class SettingsPage extends Component {

  componentWillMount() {
    if (this.vnode) {
      this.props = this.vnode.props
    }
  }

  render() {
    let { someState, toggleSomeState } = this.props
    return (
      <Page renderToolbar={this.renderToolbar}>
        <section style={{ textAlign: 'center' }}>
          <p>
            {someState ? 'On' : 'Off'}
          </p>
          <p>
            <Switch checked={someState} onClick={toggleSomeState}/>
          </p>
        </section>
      </Page>
    );
  }
})