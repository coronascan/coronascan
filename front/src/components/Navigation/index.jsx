import React from 'react';
import { useLocation } from 'react-router';
import { ROUTES } from '../../constants';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="navigation">
      <Navbar.Brand href="/">Corona Scan</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey={pathname}>
          {ROUTES.map(({ path, name }) => (
            <Nav.Link key={path} href={path}>
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
