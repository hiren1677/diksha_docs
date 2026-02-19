
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const AboutGlance: React.FC = () => {
    return (
        <Container>
            <Row className="mb-5">
                <Col md={12} className="mb-4">
                    <h3 className="section-subtitle mb-4">DIKSHA at a Glance</h3>
                    <p>DIKSHA can be accessed by learners and teachers across the country and currently supports 133 languages: 126 Indian languages and 7 foreign languages</p>
                </Col>
                <Col md={7} className="learners-and-teachers">
                    <Row>
                        <Col xs={6} md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="py-3 d-flex flex-row align-items-center">
                                    <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/student.png" className="img-fluid me-3" alt="Student" />
                                    <div className="d-flex flex-column">
                                        <strong className="d-block tenant-title">Student</strong>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="py-3 d-flex flex-row align-items-center">
                                    <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/teacher.png" className="img-fluid me-3" alt="Teacher" />
                                    <div className="d-flex flex-column">
                                        <strong className="d-block tenant-title">Teacher</strong>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="py-3 d-flex flex-row align-items-center">
                                    <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/parent.png" className="img-fluid me-3" alt="Parent" />
                                    <div className="d-flex flex-column">
                                        <strong className="d-block tenant-title">Parent</strong>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="py-3 d-flex flex-row align-items-center">
                                    <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/professional.png" className="img-fluid me-3" alt="HT & Officials" />
                                    <div className="d-flex flex-column">
                                        <strong className="d-block tenant-title">HT & Officials</strong>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body className="py-3 d-flex flex-row align-items-center">
                                    <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/other.png" className="img-fluid me-3" alt="Other" />
                                    <div className="d-flex flex-column">
                                        <strong className="d-block tenant-title">Other</strong>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col md={5}>
                    <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/homepage/mobile-app-mobile.png" alt="DIKSHA Mobile App" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutGlance;