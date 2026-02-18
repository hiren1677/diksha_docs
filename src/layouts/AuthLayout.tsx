import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthLayout;
