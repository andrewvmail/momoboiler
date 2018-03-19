import React, { Component, version } from 'react'
import { render } from 'react-dom'
import { Page, Toolbar, Button, Tab, Tabbar, BottomToolbar, Switch, BackButton } from 'react-onsenui'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect({
    someState: state`settings.someState`,
    clickButtonOnPageTwo: signal`navigation.clickButtonOnPageTwo`,
    clickPop: signal`navigation.clickPop`,
    clickPush: signal`navigation.clickPush`
  }, class SecondPage extends Component {

    componentWillMount() {
      if (this.vnode) {
        this.props = this.vnode.props
      }
    }

    render() {
      return (
        <Page>
          <Toolbar>
            <div className='left'>
              <BackButton
                onClick={() => this.props.clickPush()}
              >
                Back
              </BackButton>
            </div>
            <div className='center'>{this.props.key}</div>
          </Toolbar>
          <section style={{ textAlign: 'center' }}>
            <p>Second Page</p>
            <p><Switch checked={this.props.someState}/></p>
            <Button modifier='large' style={{ margin: '6px' }} onClick={() => this.props.clickButtonOnPageTwo()}>
              Reset button
            </Button>

          </section>
        </Page>
      )
    }
  }
)