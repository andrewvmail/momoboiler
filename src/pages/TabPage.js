import React, { Component, version } from 'react'
import { render } from 'react-dom'
import {
  Page,
  Toolbar,
  Button,
  Tab,
  Tabbar,
  BottomToolbar,
  Switch,
  BackButton
} from 'react-onsenui'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import HomePage from './HomePage'
import ClockFace from './ClockFace'
import WorldClock from './WorldClock'
import SettingsPage from './SettingsPage'

export default connect({
    someState: state`settings.someState`,
    toggleSomeState: signal`settings.toggleSomeState`,
    clickButtonOnPageOne: signal`navigation.clickButtonOnPageOne`,
    clickPush: signal`navigation.clickPush`,
    clickPop: signal`navigation.clickPop`
  }, class TabPage extends Component {

    renderTabs() {
      const { navigator } = this.props
      return [
        {
          content: <ClockFace navigator={navigator} key={0} content="Welcome home"/>,
          tab: <Tab key={0} label='Time' icon='md-time'/>
        },
        {
          content: <WorldClock navigator={navigator} key={0} content="Welcome home"/>,
          tab: <Tab key={0} label='World Clock' icon='md-globe'/>
        },
        {
          content: <SettingsPage navigator={navigator} key={1} content="Change the settings"/>,
          tab: <Tab key={1} label='Settings' icon='md-settings'/>
        }
      ]
    }

    componentWillMount() {
      // nerv hack
      if (this.vnode) {
        this.props = this.vnode.props
      }
    }

    renderToolbar() {
      const titles = [ '', 'World Clock', 'Settings' ];
      // if(titles[ this.state.index ]) {
      //   return (
      //     <Toolbar>
      //       <div className='center'>{titles[ this.state.index ]}</div>
      //     </Toolbar>
      //   );
      // }
    }

    render() {
      const { navigator } = this.props
      return (
        <Page navigator={navigator} renderToolbar={this.renderToolbar.bind(this)}>
          <Tabbar
            swipeable={true}
            position='auto'
            index={this.state.index}
            onPreChange={(event) => {
              if (event.index != this.state.index) {
                this.setState({ index: event.index })
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