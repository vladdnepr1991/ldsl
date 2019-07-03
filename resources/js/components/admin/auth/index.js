import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'ma@il.com',
            password: 'qwerty',
        };

        this.updateLogin = this.updateLogin.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.logIn = this.logIn.bind(this);
    }
    updateLogin(e) {
        this.setState({ email: e.target.value });
    }
    updatePassword(e) {
        this.setState({ password: e.target.value });
    }
    logIn(e) {
        e.preventDefault();

        axios.post(`/api/login`, {
            email: this.state.email,
            password: this.state.password,
        }).then(response => {
            this.props.addAuthToken(response.data.user.api_token);
        });
    }
    render () {
        return (
            <div className="d-flex flex-grow-1">
                <div className="page-section w-100">
                    <div className="container ">
                        <div className="row justify-content-sm-center">
                            <div className="col-sm-8 col-md-5 col-lg-4">
                                <Form>
                                    <FormGroup>
                                        <Label for="login-email">Email</Label>
                                        <Input
                                            onChange={this.updateLogin}
                                            value={this.state.email}
                                            type="email"
                                            name="emil"
                                            id="login-email"
                                            placeholder="Enter email" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="login-pass">Password</Label>
                                        <Input
                                            onChange={this.updatePassword}
                                            value={this.state.password}
                                            type="password"
                                            name="password"
                                            id="login-pass"
                                            placeholder="Enter password" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Button onClick={this.logIn} color="primary" block>Log in</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
