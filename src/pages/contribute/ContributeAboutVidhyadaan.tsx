import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const ContributeAboutVidhyadaan: React.FC = () => {
    return (
        <div className="about-vidhyadaan py-5">
        <Container>
            <Row>
                <Col md={12}>
                    <h3 className="section-subtitle mb-4">About VidyaDaan</h3>
                    <p>This national program is a call to the nation, particularly individuals & organizations across the country to contribute e-learning resources in the education domain to ensure that quality learning continues for learners across India.</p>
                    <p>Contributions can be made by individuals, teachers, educationists, subject experts, schools, government and non-government organisations etc after registering & nominating themselves.These contributions can be of different types of content such as explanation videos, teaching videos, practice questions, competency-based items, lesson plans etc. for any grade from 1 to 12 and for any subject as specified by the states/UTs under their respective projects. Such contributions must be open-licensed under the Creative Commons license framework and can be curated by the respective states/UTs & CBSE and those contributors whose content is accepted and finds high usage, will be duly recognized.</p>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default ContributeAboutVidhyadaan;