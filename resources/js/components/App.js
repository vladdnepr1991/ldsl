import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="d-fliex h-100">
          
          <div className="d-flex home-screen flex-column justify-content-center text-center">
          <div className="home-screen__content">
            <h1 className="brand-name">Dnipro Sky Lab</h1>
            <p className="home-screen__descriptions">Ініціативна група творчих людей, яких манить небо у всьому  своєму проявленні. Моделювання авіатехніки, ракетно-космічної техніки,  оптичних приладів, електронних систем – це ще неповний перелік інтересів  групи.</p>
          </div>
          </div>


          <div className="container flex-column h-100">
            <div className="divider_50"></div>


            <div className="row justify-content-between">
              <div className="col">
                <h2 className="display-4">About us</h2>
              </div>

              <div className="w-100 page-divider"></div>

              <div className="col-md-5">
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

            <div className="row justify-content-between text-right">
              <div className="col">
                <h2 className="display-4">Projects</h2>
              </div>

              <div className="w-100 page-divider"></div>


              <div className="col-md-6 d-flex">
                <div className="page-content-image">
                  <img className="img-fluid rounded" src="/images/rocket-2.jpg"></img>
                </div>
              </div>        

              <div className="col-md-5">
                <div className="page-content-text">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?</p>
                </div>
              </div>
            </div>        

            <div className="row h-25"></div>

            <div className="row justify-content-between">
              <div className="col">
                <h2 className="display-4">Events</h2>
              </div>

              <div className="w-100 page-divider"></div>

              <div className="col-md-5">
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

            <div className="row justify-content-between text-right">
              <div className="col">
                <h2 className="display-4">Expositions</h2>
              </div>

              <div className="w-100 page-divider"></div>


              <div className="col-md-6 d-flex">
                <div className="page-content-image">
                  <img className="img-fluid rounded" src="/images/exposition.jpg"></img>
                </div>
              </div>        

              <div className="col-md-5">
                <div className="page-content-text">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?</p>
                </div>
              </div>
            </div>               

            <div className="row h-25">
              <div className="page-divider"></div>
            </div>


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