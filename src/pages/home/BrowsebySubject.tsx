import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import iconMathematics from '../../assets/icon_subject_mathematics.svg';
import iconScience from '../../assets/icon_subject_science.svg';
import iconSocialScience from '../../assets/icon_subject_social_science.svg';
import iconEnglish from '../../assets/icon_subject_english.svg';
import iconEnvironmentalStudies from '../../assets/icon_subject_environmental_studies.svg';
import iconVocationalEducation from '../../assets/icon_subject_vocational_education.svg';
import iconPhysics from '../../assets/icon_subject_physics.svg';
import iconBiology from '../../assets/icon_subject_biology.svg';
import iconComputerScience from '../../assets/icon_subject_computer_science.svg';
import iconHistory from '../../assets/icon_subject_history.svg';
import iconEconomics from '../../assets/icon_subject_economics.svg';
import iconAccountancy from '../../assets/icon_subject_accountancy.svg';

const BrowsebySubject: React.FC = () => {
  return (
    <div className="browse-by-subject py-5">
    <Container>
        <h2 className="mb-4 section-title">Browse by Subject</h2>
        <Row>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4 subject-card">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectMathematics">
                    <img src={iconMathematics} className="mb-1" />
                    <span className="d-md-block fw-bold">Mathematics</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectScience">
                    <img src={iconScience} className="mb-1" />
                    <span className="d-md-block fw-bold">Science</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectSocialScience">
                    <img src={iconSocialScience} className="mb-1" />
                    <span className="d-md-block fw-bold">Social Science</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectEnglish">
                    <img src={iconEnglish} className="mb-1" />
                    <span className="d-md-block fw-bold">English</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectEnvironmentalStudies">
                    <img src={iconEnvironmentalStudies} className="mb-2" />
                    <span className="d-md-block fw-bold">Environmental Studies</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectVocationalEducation">
                    <img src={iconVocationalEducation} className="mb-2" />
                    <span className="d-md-block fw-bold">Vocational Education</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectPhysics">
                    <img src={iconPhysics} className="mb-1" />
                    <span className="d-md-block fw-bold">Physics</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectBiology">
                    <img src={iconBiology} className="mb-1" />
                    <span className="d-md-block fw-bold">Biology</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectComputerScience">
                    <img src={iconComputerScience} className="mb-1" />
                    <span className="d-md-block fw-bold">Computer Science</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectHistory">
                    <img src={iconHistory} className="mb-2" />
                    <span className="d-md-block fw-bold">History</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectEconomics">
                    <img src={iconEconomics} className="mb-1" />
                    <span className="d-md-block fw-bold">Economics</span>
                </a>
            </Col>
            <Col xs={4} md={2} className="d-flex align-items-center justify-content-center text-center mb-4">
                <a href="#" className="p-3 w-100 h-100 subjects" data-translate="newsubjectAccountancy">
                    <img src={iconAccountancy} className="mb-1" />
                    <span className="d-md-block fw-bold">Accountancy</span>
                </a>
            </Col>
            <Col md={12} className="text-center">
                <a href="#" className="btn btn-primary mt-3" data-translate="newviewAllSubjects">View All Subjects</a>
            </Col>
        </Row>
    </Container>
</div>
  );
};

export default BrowsebySubject;
