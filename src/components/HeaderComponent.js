import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isMenuOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  onMouseEnter() {
    this.setState({
      isMenuOpen: true
    });
  }

  onMouseLeave() {
    this.setState({
      isMenuOpen: false
    });
  }

  handleSubmit(event) {
    this.props.loginReq({username: this.username.value, password: this.password.value})
    this.toggleModal();
    event.preventDefault()
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  render() {
    return(
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src={"/images/logo.jpg"} height="30" weight="41" alt="La Ratatouille" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span>About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span>Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  { !sessionStorage['firstname'] ?
                    <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.isMenuOpen} toggle={this.toggleMenu}>
                      <DropdownToggle outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg"></span> Login
                        { this.props.user.logging ?
                          <span className="fa fa-spinner fa-pulse fa-fw"></span>
                          : null
                        }
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          <span className="fa fa-sign-up fa-lg"></span> Signup
                          { this.props.user.signing ?
                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                            : null
                          }
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    :
                    <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.isMenuOpen} toggle={this.toggleMenu}>
                      <DropdownToggle outline to="/profile">
                        <span className="fa fa-address-book"></span> {sessionStorage['firstname']}
                      </DropdownToggle>
                      <DropdownMenu>
                        <NavLink to={`/profile/favourites`}>
                          <DropdownItem>
                            <span className="fa fa-heart fa-lg"></span> Favourites
                          </DropdownItem>
                        </NavLink>
                        <DropdownItem onClick={this.props.logoutReq}>
                          <span className="fa fa-sign-out fa-lg"></span> Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  }
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>La Ratatouille</h1>
                <p>Anyone can cook, but only the fearless can be great!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label>Username
                  <Input type="text" name="username"
                      innerRef={(input) => this.username = input}  />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>Password
                  <Input type="password" name="password"
                      innerRef={(input) => this.password = input}  />
                </Label>
              </FormGroup>
              <FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default Header;
