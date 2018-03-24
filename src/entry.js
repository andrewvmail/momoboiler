import React from 'react'
import { render } from 'react-dom'
import { Page } from 'react-onsenui'
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

const App = connect({
    currentPage: state`navigation.currentPage`,
    action: state`navigation.action`,
  },
  function App({ currentPage, action }) {
    const Page = pages[currentPage]

    return (
      <ReactCSSTransitionGroup
        transitionName={action}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <Page key={currentPage}/>
      </ReactCSSTransitionGroup>
    )
  }
)

render(<Container controller={controller}><App/></Container>, document.getElementById('app'))
