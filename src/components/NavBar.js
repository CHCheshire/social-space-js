import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';
import styles from "../styles/NavBar.module.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
      <NavLink to="/">
      <Navbar.Brand><img src={logo} height="200"/></Navbar.Brand></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-left">
          <NavLink exact to="/" href="#home" className={styles.NavLink} activeClassName={styles.Active}><i className="fas fa-home"></i>Home</NavLink>
          <NavLink to ="/signin" href="#link" className={styles.NavLink} activeClassName={styles.Active}><i className="fas fa-sign-in-alt"></i>Sign In</NavLink>
          <NavLink to ="/signup" href="#link" className={styles.NavLink} activeClassName={styles.Active}><i className="fas fa-user-plus"></i>Sign Up</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
};

export default NavBar;