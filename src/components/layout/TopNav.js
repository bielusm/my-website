import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Button } from 'reactstrap';

const TopNav = () => {
  const links = (
    <>
      <NavItem>
        <NavLink href="#aboutMe">About Me</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#projects">My Projects</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact">Contact Me</NavLink>
      </NavItem>
    </>
  );

  return (
    <Navbar>
      <NavbarBrand>Mitchell Bielus</NavbarBrand>
      <Nav>{links}</Nav>
    </Navbar>
  );
};

export default TopNav;
