import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/common/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <aside className="bg-dark text-white p-3" style={{ width: '250px' }}>
          <Nav className="flex-column">
            <Nav.Link 
              as={Link} 
              to="/dashboard" 
              className={`text-white ${isActive('/dashboard') ? 'active' : ''}`}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/profile" 
              className={`text-white ${isActive('/profile') ? 'active' : ''}`}
            >
              Profile
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/settings" 
              className={`text-white ${isActive('/settings') ? 'active' : ''}`}
            >
              Settings
            </Nav.Link>
          </Nav>
        </aside>
        {/* Main content */}
        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
