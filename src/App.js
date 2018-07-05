import React, { Component } from 'react'
import Alerts from './components/Alerts'
import ModelsListPage from './containers/ModelListPage'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Alerts />
        <ModelsListPage />
      </div>
    )
  }
}

export default App
