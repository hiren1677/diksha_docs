import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const AboutDescription: React.FC = () => {
  return (
        <Container>
            <Row className="py-5">
                <Col md={12}>
                    <h3 className="section-subtitle mb-4">DIKSHA - One Nation, One Digital Platform.</h3>
                    <p>DIKSHA (Digital Infrastructure for Knowledge Sharing) is a national platform for school education, an initiative of National Council for Educational Research and Training (NCERT), under the aegis of the Ministry of Education (MoE), GoI. Launched in 2017 by Honourable Vice President of India - Shri M. Venkaiah Naidu, DIKSHA has been adopted by almost all the States, Union Territories, central autonomous bodies/boards including CBSE.</p>
                </Col>
            </Row>
            <Row className="pb-5">
                <Col md={4}>
                    <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/mission-vision.png" className="img-fluid" alt="Mission and Vision" />
                </Col>
                <Col md={8}>
                    <h3 className="section-subtitle mb-4">Our Mission & Vision</h3>
                    <p>At DIKSHA, our mission is to create a revolutionary learning ecosystem that empowers students to thrive in the 21st century. We believe that education should be accessible, engaging, and tailored to the individual needs of each learner.</p>
                    <p>Our vision is to transform the way education is delivered by leveraging technology and innovation. We aim to provide students with a holistic learning experience that goes beyond traditional classrooms. Through our platform, we want to equip students with the skills they need not only for academic success but also for personal growth and development.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutDescription;