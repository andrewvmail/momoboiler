import React, { Component, version } from 'react'
import { render } from 'react-dom'
import { Page, Toolbar, Button, Tab, Tabbar, BottomToolbar, Switch, BackButton } from 'react-onsenui'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect({
    someState: state`settings.someState`,
    toggleSomeState: signal`settings.toggleSomeState`,
    clickButtonOnPageOne: signal`navigation.clickButtonOnPageOne`,
    clickPush: signal`navigation.clickPush`,
    clickPop: signal`navigation.clickPop`
  }, class HomePage extends Component {

    componentWillMount() {
      if (this.vnode) {
        this.props = this.vnode.props
      }
    }

    render() {
      return (
        <Page>
          <h1>Home Page</h1>
        </Page>
      )

    }
  }
)