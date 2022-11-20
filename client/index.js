import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
// import allReducers from './reducers'

// const store = createStore(allReducers)

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Provider store={store}>
          <App />
        </Provider>
      </MantineProvider>
    </Router>,
    document.getElementById('app')
  )
})
