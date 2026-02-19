import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const AboutDocuments: React.FC = () => {
    return (
        <Container>
            <Row className="mb-4 about-documents-section">
                <Col md={12} className="mb-4">
                    <h3 className="section-subtitle">Documents</h3>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 card-bg-yellow">
                        <Card.Body className="d-flex flex-row align-items-center">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="PDF Icon" />
                            <div className="d-flex flex-column">
                                <strong className="d-block tenant-title">DIKSHA - Learnings from India Experience</strong>
                            </div>
                        </Card.Body>
                        <Card.Footer className="p-3">
                            <a className="btn btn-primary btn-sm fw-bold" href="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/pdfdata/Secretary_DoSEL_Presentation_World_Bank_Webinar.pdf" target="_blank" rel="noopener noreferrer">
                                View
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 card-bg-blue">
                        <Card.Body className="d-flex flex-row align-items-center">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="PDF Icon" />
                            <div className="d-flex flex-column">
                                <strong className="d-block tenant-title">India Report Digital Education - 2020</strong>
                            </div>
                        </Card.Body>
                        <Card.Footer className="p-3">
                            <a className="btn btn-primary btn-sm fw-bold" href="https://www.education.gov.in/sites/upload_files/mhrd/files/India_Report_Digital_Education_0.pdf" target="_blank" rel="noopener noreferrer">
                                View
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 card-bg-red">
                        <Card.Body className="d-flex flex-row align-items-center">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="PDF Icon" />
                            <div className="d-flex flex-column">
                                <strong className="d-block tenant-title">India Report Digital Education - 2021</strong>
                            </div>
                        </Card.Body>
                        <Card.Footer className="p-3">
                            <a className="btn btn-primary btn-sm fw-bold" href="https://www.education.gov.in/sites/upload_files/mhrd/files/irde_21.pdf" target="_blank" rel="noopener noreferrer">
                                View
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 card-bg-yellow">
                        <Card.Body className="d-flex flex-row align-items-center">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="PDF Icon" />
                            <div className="d-flex flex-column">
                                <strong className="d-block tenant-title">NATIONAL TEACHER PLATFORM (Strategy and Approach)</strong>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a className="btn btn-primary btn-sm fw-bold" href="https://diksha.gov.in/assets/download/National%20Teachers%20Platform-%20Strategy%20&%20Approach.pdf" target="_blank" rel="noopener noreferrer">
                                View
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 card-bg-blue">
                        <Card.Body className="py-3 d-flex flex-row align-items-center">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="PDF Icon" />
                            <div className="d-flex flex-column">
                                <strong className="d-block tenant-title">PRAGYATA, Guidelines for Digital Education</strong>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a className="btn btn-primary btn-sm fw-bold" href="https://www.education.gov.in/sites/upload_files/mhrd/files/pragyata-guidelines_0.pdf" target="_blank" rel="noopener noreferrer">
                                View
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 card-bg-red">
                        <Card.Body className="py-3 d-flex flex-row align-items-center">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="PDF Icon" />
                            <div className="d-flex flex-column">
                                <strong className="d-block tenant-title">Design and Architecture Framework for Education Ecosystem Registry</strong>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a className="btn btn-primary btn-sm fw-bold" href="https://www.education.gov.in/sites/upload_files/mhrd/files/upload_document/EER-v9.pdf" target="_blank" rel="noopener noreferrer">
                                View
                            </a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutDocuments;