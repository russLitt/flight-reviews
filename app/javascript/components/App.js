import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import ReactBootstrap, { Navbar, Nav, NavItem } from 'react-bootstrap';
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

function App() {
    return(
        <div className="App">
        <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">Flight Reviews</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
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