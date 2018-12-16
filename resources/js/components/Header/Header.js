import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

 import "./index.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="main-nav">
        <div className="container">
          <div className="row">
            <div className="col">
              <Navbar expand="md" color="light" dark>
                <NavbarBrand href="/"> <img className="nav-brand" src="/images/logo_brand.png"></img> </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
              <NavItem>
                        <NavLink href="#about">Команда</NavLink>
                      </NavItem>

              <NavItem>
                        <NavLink href="#projects">Проекти</NavLink>
                      </NavItem>

              <NavItem>
                        <NavLink href="#events">Події</NavLink>
                      </NavItem>

              <NavItem>
                        <NavLink href="#expositions">Виставки</NavLink>
                      </NavItem>		

              <NavItem>
                        <NavLink href="#contacts">Контакти</NavLink>
                      </NavItem>              
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}