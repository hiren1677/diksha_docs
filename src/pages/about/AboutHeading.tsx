import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const AboutHeading: React.FC = () => {
  return (
    <div className="heading-bluebg py-5">
        <Container>
        <Row>
            <Col md={12}>
            <h2 className="section-title">About DIKSHA</h2>
            <p>An initiative of the National Council of Educational Research and Training (Ministry of Education, Govt of India)</p>
            </Col>
        </Row>
        </Container>
    </div>
  );
};

export default AboutHeading;