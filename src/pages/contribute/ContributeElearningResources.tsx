import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const ContributeElearningResources: React.FC = () => {
    return (
        <Container className="mt-5 mb-3">
            <Row>
                <Col md={12}>
                    <h3 className="section-subtitle mb-4">Types of e-learning resources you can contribute</h3>
                </Col>
                <Col md={12} className="elearning-resources-cards">
                    <Card className="p-0 text-center">
                        <Card.Body>
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/contribute/explanation.png" alt="Explanation Videos" />
                        </Card.Body>
                        <Card.Footer>Explanation Videos</Card.Footer>
                    </Card>
                    <Card className="p-0 text-center">
                        <Card.Body>
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/contribute/explore-video.png" alt="Practice Questions" />
                        </Card.Body>
                        <Card.Footer>Practice Questions</Card.Footer>
                    </Card>
                    <Card className="p-0 text-center">
                        <Card.Body>
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/contribute/teaching.png" alt="Teaching Videos" />
                        </Card.Body>
                        <Card.Footer>Teaching Videos</Card.Footer>
                    </Card>
                    <Card className="p-0 text-center">
                        <Card.Body>
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/contribute/experiental.png" alt="Experiential Learning Videos" />
                        </Card.Body>
                        <Card.Footer>Experiential Learning Videos</Card.Footer>
                    </Card>
                    <Card className="p-0 text-center">
                        <Card.Body>
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/contribute/lesstion.png" alt="Lession Plans" />
                        </Card.Body>
                        <Card.Footer>Lesson Plans</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContributeElearningResources;