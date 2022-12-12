//Import Dependencies
import React from "react";
import { Router, Route, Routes, Link  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
//Imported Components Below
import Home from "./Home";
import Login from "./Login";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";
import CreateAccount from "./CreateAccount";
import AllData from "./AllData";


const NavMenu = () => {

    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">BadBank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/CreateAccount">Create Account</Nav.Link>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Login">Login</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Withdraw">
                    Withdraw
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Deposit">Deposit</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/AllData">
                    All Data
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavMenu;