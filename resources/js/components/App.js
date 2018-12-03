import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="wrapper container-fluid m-0 p-0">
          <Header />
          <div className="row screen">
            <div className="col">
              screen
            </div>
          </div>

          <div className="row screen">
            <div className="col">
              screen
            </div>
          </div>

          <div className="row screen">
            <div className="col">
              screen
            </div>
          </div>

          <div className="row screen">
            <div className="col">
              screen
            </div>
          </div>

        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))