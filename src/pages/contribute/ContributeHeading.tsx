import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const ContributeHeading: React.FC = () => {
  return (
    <div className="heading-bluebg py-5">
        <Container>
        <Row>
            <Col md={12}>
            <h2 className="section-title">Contribute</h2>
            <p>Contribute e-learning resources in the education domain to ensure that quality learning continues for learners across India.</p>
            </Col>
        </Row>
        </Container>
    </div>
  );
};

export default ContributeHeading;