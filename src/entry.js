import React from 'react'
import { render } from 'react-dom'
import { Page, Navigator } from 'react-onsenui'
import { Container, connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import FirstPage from "./pages/FirstPage"
import SecondPage from "./pages/SecondPage"
import TabPage from "./pages/TabPage"
import { controller } from './cerebral'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const pages = {
  firstPage: FirstPage,
  secondPage: SecondPage,
  tabPage: TabPage
}

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const App = connect({
    currentPage: state`navigation.currentPage`,
    action: state`navigation.action`,
  },
  function App({ currentPage, action }) {
    return (
      <Navigator
        renderPage={renderPage}
        animation='fade'
        animationOptions={{duration: 0.2, timing: 'ease-in'}}
        initialRoute={{component: TabPage, key: 'tabPage'}}
      />
    )
  }
)

render(<Container controller={controller}><App/></Container>, document.getElementById('app'))
