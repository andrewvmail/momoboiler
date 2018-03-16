import React, { Component, version } from 'react'
import { render } from 'react-dom'
import { Page, Toolbar, Button, Tab, Tabbar, BottomToolbar } from 'react-onsenui'
import { Container, connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import MyTabPage from "./pages/MyTabPage";
import SettingsPage from "./pages/SettingsPage";
import { controller } from './cerebral'


window.t0 = performance.now()

const App = connect({
    count: state`count`,
    click: signal`click`,
    reset: signal`reset`
  },
  class AppComponent extends Component {
    constructor() {
      super()
      this.state = {timer: 0, index: 0}
    }

    renderToolbar() {
      const titles = ['Home', 'Settings'];
      return (
        <Toolbar>
          <div className='center'>{titles[this.state.index]}</div>
        </Toolbar>
      );
    }

    renderTabs() {
      return [
        {
          content: <MyTabPage key={0} content="Welcome home"/>,
          tab: <Tab key={0} label='Home' icon='md-home'/>
        },
        {
          content: <SettingsPage key={1} content="Change the settings"/>,
          tab: <Tab key={1} label='Settings' icon='md-settings'/>
        }
      ];
    }

    componentWillMount() {
      // nerv hack
      if (this.vnode) {
        this.props = this.vnode.props
      }
    }

    render() {
      return (
        <Page renderToolbar={this.renderToolbar.bind(this)}>
          <Tabbar
            swipeable={true}
            position='auto'
            index={this.state.index}
            onPreChange={(event) => {
              if (event.index != this.state.index) {
                this.setState({index: event.index});
              }
            }
            }
            renderTabs={this.renderTabs.bind(this)}
          />
        </Page>
      )

    }
  }
)

render(<Container controller={controller}><App/></Container>, document.getElementById('app'))

