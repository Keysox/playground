import React, { Component } from 'react'
import { Img } from 'the-platform'

class App extends Component {
  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Img src="https://lh3.googleusercontent.com/dQVzJ31kwETDKHFoJqD2smCxCLY_w5SLT7_-LIgvPChqAjUifh5oot8XU31eEATBPN4rhB3jZd9UWRaTaQJPzXGGO_UM-sRQMA6MC0nGLeEIXLaVmAOrkNVZmbLcaPwT3dw-uhk-Xvs=w1840-h1226-no" />
      </React.Suspense>
    )
  }
}

export default App
