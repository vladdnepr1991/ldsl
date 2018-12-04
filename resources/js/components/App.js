import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <div className="wrapper container-fluid m-0">
          <div className="row screen">

            <div className="col home-screen">

              <div className="home-screen-logo">
                <span>Dnipro Sky Lab</span>
              </div>
            </div>
          </div>

          {/* <div className="row screen">
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
          </div> */}

        </div>
      </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))