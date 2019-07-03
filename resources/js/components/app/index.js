import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../main";
import AdminContainer from "../../containers/admin";
import CreateProject from "../admin/projects/create";
import NotFound from "../not-found";

class App extends Component {
    componentDidMount() {
        this.props.setTokenFromStorage();
    }
    render () {
        return (
            <BrowserRouter>
                <div className="d-flex flex-column main-content">
                    <Header />

                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/admin" component={AdminContainer} />
                        <Route path="/projects/create" component={CreateProject} />
                        {/* <Route exact path="/projects" component={Projects} /> */}
                        <Route component={NotFound} />
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

                                    <p className="py-3">
                                        <small>Вся інформація викладена тільки для ознайомлення. Ми не несемо ніякої відповідальності за використання та розповсюдження її іншими особами.</small>
                                    </p>
                                </div>

                                <div className="col logo-wrapper">
                                    <img alt="Dnipro Sky Lab logo" width="150" src="/images/logo_footer.png" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}

export default App;
