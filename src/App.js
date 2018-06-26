/* eslint-disable react/prefer-stateless-function,react/jsx-filename-extension */
import React from 'react'
import Alerts from './components/Alerts'
import './App.css'
import ModelListPage from './containers/ModelListPage'

class App extends React.Component {
  render () {
    return (
      <div>
        <Alerts />
        <ModelListPage />
      </div>
    )
  }
}

export default App
