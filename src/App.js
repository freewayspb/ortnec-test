import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import ModelsListPage from './containers/ModelListPage'

class App extends Component {
  render () {
    return (
      <div className="App">
        <ModelsListPage />
      </div>
    )
  }
}

export default App
