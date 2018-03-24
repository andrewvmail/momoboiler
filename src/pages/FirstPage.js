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
  }, class FirstPage extends Component {

    componentWillMount() {
      if (this.vnode) {
        this.props = this.vnode.props
      }
    }

    render() {
      // let { someState, toggleSomeState } = this.props
      return (
        <Page>
          <Toolbar>
            <div className='left'>
              <BackButton
                onClick={() => this.props.clickPop()}
              >
                Back
              </BackButton>
            </div>
            <div className='center'>{this.props.key}</div>
          </Toolbar>
          <section style={{ textAlign: 'center' }}>
            <p>First Page</p>
            <p><Switch checked={true}/></p>
            <Button modifier='large' style={{ margin: '6px' }} onClick={() => this.props.clickButtonOnPageOne()}>Reset
              button</Button>
            // )
            // )
          </section>
        </Page>
      )
    }
  }
)