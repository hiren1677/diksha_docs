import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContributeExploreVidhyadaan: React.FC = () => {
  const vidhyadaanLogo = 'https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/homepage/vidya_daan_logo.png';
  const exploreVidhyadaan = 'https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/homepage/explore_vidyadan.png';
  return (
    <Container>
      <Row className="my-5">
          <Col md={7}>
            <p><img src={vidhyadaanLogo} alt="Vidhyadaan Logo" /></p>
            <p>A program of the nation, for the nation and by the nation for managing continuity of quality learning.</p>
            <p><a href="https://vdn.diksha.gov.in/" target="_blank" className="btn btn-outline-primary btn-lg">Participate</a></p>
          </Col>
          <Col md={5}>
            <img src={exploreVidhyadaan} alt="Explore Vidhyadaan" className="img-fluid" /></Col>
      </Row>
    </Container>
  );
};

export default ContributeExploreVidhyadaan;