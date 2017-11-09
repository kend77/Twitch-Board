'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
    <MuiThemeProvider >
      <Root/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
)
