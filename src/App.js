/* eslint-disable react/prefer-stateless-function,react/jsx-filename-extension */
import React, { Component } from 'react'
import Alerts from './components/Alerts'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Alerts />
      </div>
    )
  }
}

export default App;
