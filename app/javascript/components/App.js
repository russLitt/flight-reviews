import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import ReactBootstrap, { Navbar, Nav, NavItem } from 'react-bootstrap';
import styled from 'styled-components'
//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/Nav';
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

const Right = styled.div`
//   flex-basis: 12%;
  align-self: flex-end !important;
  margin-right: 24px;
`

function App() {
    return(
        <div className="App">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Flight Reviews</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Right>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Log Out</Nav.Link>
            </Nav>
            </Right>
          </Navbar.Collapse>
        </Navbar>
    <Switch>
        <Route exact path="/" component={Airlines}/>
        <Route exact path="/airlines/:slug" component={Airline}/>
    </Switch>
    </div>
    )
}

export default App