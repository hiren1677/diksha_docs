import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Yellowbar: React.FC = () => {
  return (
<div className="yellowbar py-3">
    <Container>
    <Row>
        <Col md={12} className="text-center">
        An initiative of the National Council of Educational Research and Training (Ministry of Education, Govt of India)
        </Col>
    </Row>
    </Container>
</div>
  );
};

export default Yellowbar;