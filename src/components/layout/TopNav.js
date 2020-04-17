import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Button } from 'reactstrap';

const TopNav = () => {
  const links = (
    <>
      <NavItem>
        <NavLink href="#about-me">About Me</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact">Contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#projects">My Projects</NavLink>
      </NavItem>
    </>
  );

  return (
    <Navbar>
      <NavbarBrand href="#about-me">Mitchell Bielus</NavbarBrand>
      <Nav>{links}</Nav>
    </Navbar>
  );
};

export default TopNav;
