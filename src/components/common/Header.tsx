import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import useText from '../../hooks/useText';
import DikshaLogo from '../../assets/img_logo_diksha.png';

const Header: React.FC = () => {
  const location = useLocation();
  const { getText } = useText();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header sticky-top">
      <Navbar expand="lg" className="py-3">
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="mainmenu" className="me-3 p-1" />
            <Navbar.Brand as={Link} to="/">
                <img src={DikshaLogo} alt={getText('header.logo.alt', 'DIKSHA')} title={getText('header.logo.alt', 'DIKSHA')} />
            </Navbar.Brand>
          </div>
          <Navbar.Collapse id="mainmenu" className="flex-column flex-lg-row justify-content-lg-between">
            <Nav className="gap-md-3 text-nowrap">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={isActive('/') ? 'active' : ''}
              >
                {getText('header.navigation.home', 'Home')}
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
              >
                {getText('header.navigation.about', 'About')}
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contribute" 
                className={isActive('/contribute') ? 'active' : ''}
              >
                {getText('header.navigation.contribute', 'Contribute')}
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/dashboard" 
                className={isActive('/dashboard') ? 'active' : ''}
              >
                {getText('header.navigation.dashboard', 'Dashboard')}
              </Nav.Link>
            </Nav>
            <hr className="d-sm-block d-md-none" />
            <div className="d-flex align-items-center flex-shrink-0">
              <a href="#" className="btn btn-primary text-nowrap">{getText('header.loginRegister', 'Login/Register')}</a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
