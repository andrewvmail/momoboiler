import { Module } from 'cerebral'
import { when, set, push } from 'cerebral/operators'
import { state, props } from 'cerebral/tags'

export default Module({
  state: {
    action: 'push',
    currentPage: 'firstPage',
    navigationStack: [
      // { pageName: 'firstPage', props: {} }
    ]
  },
  signals: {
    clickButtonOnPageOne: [
      nav({pageName: 'firstPage', action: 'push'})

    ],
    clickButtonOnPageTwo: [
      nav({pageName: 'secondPage', action: 'push'})
    ],
    clickPush: [
      nav({pageName: 'firstPage', action: 'pop'})
    ],
    clickPop: [
      nav({pageName: 'secondPage', action: 'push'})
    ],
  }
})

function nav({pageName, action}) {
  return function pushPage({state, props}) {
    state.set('navigation.action', action )
    state.set('navigation.currentPage', pageName)
    action === 'push'
      ? state.push('navigation.navigationStack', {pageName: pageName})
      : undefined
  }
}