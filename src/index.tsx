import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@welldone-software/why-did-you-render')(React, {
    trackAllPureComponents: true,
  })
}

Sentry.init({
  dsn: 'https://659b07fb917244ceaba2e0f66debee09@o466823.ingest.sentry.io/5481454',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
