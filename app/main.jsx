'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { deepPurple500 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import store from './store'
import Root from './components/Root'

const muiTheme = getMuiTheme({
  palette: {
    textColor: deepPurple500,
  }
});


render (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <Root/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
)
