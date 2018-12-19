import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header'
import Main from './main';
import Projects from './projects';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="d-flex flex-column">
          <Header />
          
          <Switch >
            <Route exact path="/" component={Main} />
            <Route path="/projects" component={Projects} />
          </Switch>

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