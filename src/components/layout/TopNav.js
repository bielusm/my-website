import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Button } from 'reactstrap';
import { ScrollspyNavLink } from 'reactstrap-scrollspy';

const TopNav = () => {
  const links = (
    <>
      <NavItem>
        <ScrollspyNavLink name="about-me">
          <NavLink href="#about-me">About Me</NavLink>
        </ScrollspyNavLink>
      </NavItem>
      <NavItem>
        <ScrollspyNavLink name="contact">
          <NavLink href="#contact">Contact</NavLink>
        </ScrollspyNavLink>
      </NavItem>
      <NavItem>
        <ScrollspyNavLink name="projects">
          <NavLink href="#projects">My Projects</NavLink>
        </ScrollspyNavLink>
      </NavItem>
    </>
  );

  return (
    <Navbar fixed={'top'}>
      <NavbarBrand href="#about-me">Mitchell Bielus</NavbarBrand>
      <Nav>{links}</Nav>
    </Navbar>
  );
};

export default TopNav;
