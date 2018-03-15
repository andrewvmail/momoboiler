import React, {Component, version} from 'react'
import {render} from 'react-dom'
import {Page, Toolbar, Button, Tab, Tabbar, BottomToolbar} from 'react-onsenui'
import {Container, connect} from '@cerebral/react'
import {Controller, Module} from 'cerebral'
import {state, signal} from 'cerebral/tags'
import Devtools from 'cerebral/devtools'
import StorageModule from '@cerebral/storage'

const storage = StorageModule({target: localStorage, json: true, sync: {'count': 'count'}})

export const app = Module({
  modules: {storage},
  state: {
    count: 0,
  },
  signals: {
    click: [
      function increaseCount({state}) {
        state.increment('count', 1)
      }
    ],
    reset: [
      function resetCount({state}) {
        state.set('count', 0)
      }
    ]
  }
})

export const controller = Controller(app, {
  devtools: Devtools({
    host: 'localhost:8585',
    https: false,
    reconnect: true,
    storeMutations: true,
    bigComponentsWarning: 5,
    warnStateProps: true,
  })
})
