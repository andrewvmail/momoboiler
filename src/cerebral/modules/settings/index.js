import { Module } from 'cerebral'

export default Module({
  state: {
    someState: false
  },
  signals: {
    toggleSomeState: [
      function toggleSomeState({state}) {
        const pathToToggle = 'settings.someState'
        state.set(pathToToggle, !state.get(pathToToggle))
      }
    ]
  }
})