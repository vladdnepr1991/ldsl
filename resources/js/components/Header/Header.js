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
      <div>
        <Navbar expand="md" fixed="top" color="light" light>
          <NavbarBrand href="/">Dnipro Sky Lab</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
				<NavItem>
                	<NavLink href="#about">О нас</NavLink>
              	</NavItem>

				<NavItem>
                	<NavLink href="#projects">Проекты</NavLink>
              	</NavItem>

				<NavItem>
                	<NavLink href="#events">Мероприятрия</NavLink>
              	</NavItem>

				<NavItem>
                	<NavLink href="#expositions">Выставки</NavLink>
              	</NavItem>		

				<NavItem>
                	<NavLink href="#contacts">Контакты</NavLink>
              	</NavItem>              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}