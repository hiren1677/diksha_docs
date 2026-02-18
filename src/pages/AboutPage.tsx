import React from 'react';
import MainLayout from '../layouts/MainLayout';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="contentarea">
    <div className="yellowbar py-3">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    An initiative of the National Council of Educational Research and Training (Ministry of Education, Govt of India)
                </div>
            </div>
        </div>
    </div>
    <div className="about-heading py-5 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">About DIKSHA</h2>
                    <p>An initiative of the National Council of Educational Research and Training (Ministry of Education, Govt of India)</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row mb-5">
            <div className="col-md-12">
                <h3 className="section-subtitle">DIKSHA - One Nation, One Digital Platform.</h3>
                <p>DIKSHA (Digital Infrastructure for Knowledge Sharing) is a national platform for school education, an initiative of National Council for Educational Research and Training (NCERT), under the aegis of the Ministry of Education (MoE), GoI. Launched in 2017 by Honourable Vice President of India - Shri M. Venkaiah Naidu, DIKSHA has been adopted by almost all the States, Union Territories, central autonomous bodies/boards including CBSE.</p>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-md-4"><img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/mission-vision.png" className="img-fluid" alt="" /></div>
            <div className="col-md-8">
                <h3 className="section-subtitle">Our Mission & Vision</h3>
                <p>At DIKSHA, our mission is to create a revolutionary learning ecosystem that empowers students to thrive in the 21st century. We believe that education should be accessible, engaging, and tailored to the individual needs of each learner.</p>
                <p>Our vision is to transform the way education is delivered by leveraging technology and innovation. We aim to provide students with a holistic learning experience that goes beyond traditional classrooms. Through our platform, we want to equip students with the skills they need not only for academic success but also for personal growth and development.</p>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-md-12 mb-5">
                <h3 className="section-subtitle">DIKSHA - One Nation, One Digital Platform.</h3>
                <p>DIKSHA can be accessed by learners and teachers across the country and currently supports 133 languages: 126 Indian languages and 7 foreign languages</p>
            </div>
            <div className="col-md-7 learners-and-teachers">
                <div className="row">
                    <div className="col-6 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body py-3 d-flex flex-row align-items-center">
                                <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/student.png" className="img-fluid me-3" alt="Student" />
                                <div className="d-flex flex-column">
                                    <strong className="d-block tenant-title">Student</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body py-3 d-flex flex-row align-items-center">
                                <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/teacher.png" className="img-fluid me-3" alt="Teacher" />
                                <div className="d-flex flex-column">
                                    <strong className="d-block tenant-title">Teacher</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body py-3 d-flex flex-row align-items-center">
                                <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/parent.png" className="img-fluid me-3" alt="Parent" />
                                <div className="d-flex flex-column">
                                    <strong className="d-block tenant-title">Parent</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body py-3 d-flex flex-row align-items-center">
                                <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/professional.png" className="img-fluid me-3" alt="HT & Officials" />
                                <div className="d-flex flex-column">
                                    <strong className="d-block tenant-title">HT & Officials</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body py-3 d-flex flex-row align-items-center">
                                <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/other.png" className="img-fluid me-3" alt="Other" />
                                <div className="d-flex flex-column">
                                    <strong className="d-block tenant-title">Other</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4col-md-5">
                <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/homepage/mobile-app-mobile.png" alt="" className="img-fluid" />
            </div>
        </div>
        <div className="row mb-4 state-of-art">
            <div className="col-md-12 mb-5">
                <h3 className="section-subtitle">State of the art learning ecosystem for users</h3>
            </div>
            <div className="col-md-12">
                <div className="custom-grid">
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/qr-code.png" alt="" />
                        </div>
                        <div className="card-footer">Energized Textbook</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/blogger.png" alt="" />
                        </div>
                        <div className="card-footer">Teacher Professional Development</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/question-mark.png" alt="" />
                        </div>
                        <div className="card-footer">Question Bank</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/creative.png" alt="" />
                        </div>
                        <div className="card-footer">Content Sourcing</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/graphic-tablet.png" alt="" />
                        </div>
                        <div className="card-footer">Content Authoring</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/quiz.png" alt="" />
                        </div>
                        <div className="card-footer">Quizzes</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/responsive.png" alt="" />
                        </div>
                        <div className="card-footer">Content Consumption</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/dashboard.png" alt="" />
                        </div>
                        <div className="card-footer">Data Tool and Dashboard</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/robot.png" alt="" />
                        </div>
                        <div className="card-footer">Chatbot</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/digital-twin.png" alt="" />
                        </div>
                        <div className="card-footer">Digital Credential</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/collaboration.png" alt="" />
                        </div>
                        <div className="card-footer">Collaboration</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/copywriter.png" alt="" />
                        </div>
                        <div className="card-footer">Phygital</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/training.png" alt="" />
                        </div>
                        <div className="card-footer">Ccube</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/qualitative-research.png" alt="" />
                        </div>
                        <div className="card-footer">Survey</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/linguistic.png" alt="" />
                        </div>
                        <div className="card-footer">Language Translations</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/help.png" alt="" />
                        </div>
                        <div className="card-footer">Mentoring</div>
                    </div>
                    <div className="card p-0 text-center">
                        <div className="card-body">
                            <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/sunbird.png" alt="" />
                        </div>
                        <div className="card-footer">Sunbird Registry and Credential</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-4 about-documents-section">            
            <div className="col-md-12 mb-5">
                <h3 className="section-subtitle">Documents</h3>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100 card-bg-yellow">
                    <div className="card-body d-flex flex-row align-items-center">
                        <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="NCERT Logo" />
                        <div className="d-flex flex-column">
                            <strong className="d-block tenant-title">DIKSHA - Learnings from India Experience</strong>
                        </div>
                    </div>
                    <div className="card-footer p-3">
                        <a href="#" className="btn btn-primary btn-sm fw-bold" title="">View<i className="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100 card-bg-blue">
                    <div className="card-body d-flex flex-row align-items-center">
                        <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="NCERT Logo" />
                        <div className="d-flex flex-column">
                            <strong className="d-block tenant-title">India Report Digital Education - 2020</strong>
                        </div>
                    </div>
                    <div className="card-footer p-3">
                        <a href="#" className="btn btn-primary btn-sm fw-bold" title="">View<i className="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100 card-bg-red">
                    <div className="card-body d-flex flex-row align-items-center">
                        <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="NCERT Logo" />
                        <div className="d-flex flex-column">
                            <strong className="d-block tenant-title">India Report Digital Education - 2021</strong>
                        </div>
                    </div>
                    <div className="card-footer p-3">
                        <a href="#" className="btn btn-primary btn-sm fw-bold" title="">View<i className="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100 card-bg-yellow">
                    <div className="card-body d-flex flex-row align-items-center">
                        <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="NCERT Logo" />
                        <div className="d-flex flex-column">
                            <strong className="d-block tenant-title">NATIONAL TEACHER PLATFORM (Strategy and Approach)</strong>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary btn-sm fw-bold" title="">View<i className="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100 card-bg-red">
                    <div className="card-body py-3 d-flex flex-row align-items-center">
                        <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="NCERT Logo" />
                        <div className="d-flex flex-column">
                            <strong className="d-block tenant-title">PRAGYATA, Guidelines for Digital Education</strong>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary btn-sm fw-bold" title="">View<i className="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100 card-bg-blue">
                    <div className="card-body py-3 d-flex flex-row align-items-center">
                        <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/assets/imgs/about/pdf.png" className="img-fluid stage-icon me-3" alt="NCERT Logo" />
                        <div className="d-flex flex-column">
                            <strong className="d-block tenant-title">Design and Architecture Framework for Education Ecosystem Registry</strong>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary btn-sm fw-bold" title="">View<i className="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </MainLayout>
  );
};

export default AboutPage;
