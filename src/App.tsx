import React, { Component } from 'react';
import { Img } from 'the-platform';
import logo from './img/_DSC9672.jpg';

class App extends Component {
  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Img src={logo} />
      </React.Suspense>
    );
  }
}

export default App;
