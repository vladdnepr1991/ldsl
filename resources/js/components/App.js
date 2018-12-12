import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="d-fliex h-100">
          <Header />
          
          <div className="d-flex home-screen flex-column justify-content-center text-center">
            <div className="home-screen__content">
              <p className="home-screen__descriptions">Ініціативна група творчих людей, яких манить небо у всьому  своєму проявленні. Моделювання авіатехніки, ракетно-космічної техніки,  оптичних приладів, електронних систем – це ще неповний перелік інтересів  групи.</p>
            </div>
          </div>

          <div id="about" className="d-flex w-100 page-section">
            <div className="container flex-column h-100">
              <div className="row justify-content-between">
                <div className="col">
                  <h2 className="">Про нас</h2>
                </div>

                <div className="w-100 page-divider"></div>

                <div className="col-md-5">
                  <div className="page-content-text">
                    <p>Ми - група ентузіастів, аматорів, інженерів, поєднані спільною метою створювати різні пристрої своїми руками. Починалося все зі студентських років. Кожен займався або моделюванням ракет чи літаків, або виготовленням якихось приладів. Однак 
Зараз ми працюємо в ракетно-космічній галузі та втілюємо в життя свої задуми використовуючи нові знання та можливості. 
</p>
                  </div>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="page-content-image">
                    <img className="img-fluid rounded" src="/images/team-2.jpg"></img>
                  </div>
                </div>

                <div className="w-100 page-divider page-divider_bottom"></div>
              </div>
            </div>
          </div>

          <div id="projects" className="d-flex w-100 page-section">
            <div className="container flex-column h-100">
              <div className="row justify-content-between text-right">
                <div className="col">
                  <h2 className="">Projects</h2>
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

                <div className="w-100 page-divider page-divider_bottom"></div>
              </div>  
            </div>
          </div>

          <div id="events" className="d-flex w-100 page-section">
            <div className="container flex-column h-100">
              <div className="row justify-content-between">
                <div className="col">
                  <h2 className="">Events</h2>
                </div>

                <div className="w-100 page-divider"></div>

                <div className="col-md-5">
                  <div className="page-content-text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur delectus sit inventore vel, eaque earum, tenetur quisquam aperiam natus tempora at numquam minima architecto vitae modi optio iusto beatae?
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="page-content-image">
                    <img className="img-fluid rounded" src="/images/events.jpg"></img>
                  </div>
                </div>

                <div className="w-100 page-divider page-divider_bottom"></div>
              </div>
            </div>
          </div>

          <div id="expositions" className="d-flex w-100 page-section">
            <div className="container flex-column h-100">
              <div className="row justify-content-between text-right">
                <div className="col">
                  <h2 className="">Expositions</h2>
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

                <div className="w-100 page-divider page-divider_bottom"></div>
              </div>  
            </div>          
          </div>


          <div className="d-flex w-100 contacts-wrapper">
            <div className="container flex-column">             
              <div className="row">
                <div className="col">
                  <address id="contacts" className="contacts">
                    {/* <p><strong>Phone:</strong> <span>+38 (123) 123-45-67</span></p> */}
                    <p><strong><span><a href="https://www.facebook.com/groups/DniproSkyLAB" target="_blank">Facebook</a></span></strong></p>
                    <p><strong><span><a href="https://www.youtube.com/user/MaxBmp1/featured" target="_blank">YouTube</a></span></strong></p>
                    <p><span><a href="mailto:Dniproskylab@gmail.com">Dniproskylab@gmail.com</a></span></p>
                  </address>
                </div>

                <div className="col logo-wrapper">
                  <img alt="Dnipro Sky Lab logo" width="150" src="/images/logo.png" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))