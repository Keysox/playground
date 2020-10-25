import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import LogRocket from 'logrocket'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@welldone-software/why-did-you-render')(React, {
    trackAllPureComponents: true,
  })
}

LogRocket.init('tlxym5/alex-kessock')

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
