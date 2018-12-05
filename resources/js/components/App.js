import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="d-fliex h-100">
          
          {/* <div className="d-fliex h-100 home-screen">
          </div> */}


          <div className="container flex-column h-100">

            {/* <img className="img-fluid rounded w-100" src="/images/main.jpg"></img> */}

            <div className="text-center">
              <h1 className="site-brand">Dnipro Sky Lab</h1>
            </div>

            <div className="row h-25"></div>


            <div className="row ">
              <div className="col">
                <h2 className="display-3">About us</h2>
              </div>

              <div className="w-100"></div>

              <div className="col-md-6">
                <div className="page-content-text">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?</p>
                </div>
              </div>

              <div className="col-md-6 d-flex">
                <div className="page-content-image">
                  <img className="img-fluid rounded" src="/images/team-2.jpg"></img>
                </div>
              </div>
            </div>

            <div className="row h-25"></div>

            <div className="row text-right">
              <div className="col">
                <h2 className="display-3">Projects</h2>
              </div>

              <div className="w-100"></div>


              <div className="col-md-6 d-flex">
                <div className="page-content-image">
                  <img className="img-fluid rounded" src="/images/rocket-2.jpg"></img>
                </div>
              </div>        

              <div className="col-md-6">
                <div className="page-content-text">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?</p>
                </div>
              </div>
            </div>        

            <div className="row h-25"></div>

            <div className="row ">
              <div className="col">
                <h2 className="display-3">Events</h2>
              </div>

              <div className="w-100"></div>

              <div className="col-md-6">
                <div className="page-content-text">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?</p>
                </div>
              </div>

              <div className="col-md-6 d-flex">
                <div className="page-content-image">
                  <img className="img-fluid rounded" src="/images/events.jpg"></img>
                </div>
              </div>
            </div>

            <div className="row h-25"></div>

            <div className="row text-right">
              <div className="col">
                <h2 className="display-3">Expositions</h2>
              </div>

              <div className="w-100"></div>


              <div className="col-md-6 d-flex">
                <div className="page-content-image">
                  <img className="img-fluid rounded" src="/images/exposition.jpg"></img>
                </div>
              </div>        

              <div className="col-md-6">
                <div className="page-content-text">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?</p>
                </div>
              </div>
            </div>               

            <div className="row h-25"></div>

            <div className="row">
              <div className="col-md-6 offset-md-6 text-right">
                <address>
                  <p>Phone: +38 (123) 123-45-67</p>
                  <p>E-mail: ma@il.com</p>
                  <p>Facebook: facebook.com</p>
                </address>
              </div>
            </div>
            
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))