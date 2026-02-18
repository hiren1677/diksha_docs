//import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

const BrowsebyGrade: React.FC = () => {
    return (
        <div className="browse-by-grade py-5">
            <Container>
                <h2 className="mb-4 section-title">Browse by Grade</h2>
                <Row>
                    <Col md={12}>
                        <Tab.Container defaultActiveKey="found-stage">
                            <Nav variant="tabs" className="explore-study-tab mb-4 gap-3">
                                <Nav.Item className="tab-pane-link">
                                    <Nav.Link eventKey="found-stage" className="found-stage-link px-1">
                                        Foundational Stage
                                        <small className="d-block small-text fw-normal">Pre-Primary to Grade 2</small>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="tab-pane-link">
                                    <Nav.Link eventKey="prep-stage" className="prep-stage-link px-1">
                                        Preparatory Stage
                                        <small className="d-block small-text fw-normal">Grade 3-5</small>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="tab-pane-link">
                                    <Nav.Link eventKey="mid-stage" className="mid-stage-link px-1">
                                        Middle Stage
                                        <small className="d-block small-text fw-normal">Grade 6-8</small>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="tab-pane-link">
                                    <Nav.Link eventKey="sec-stage" className="sec-stage-link px-1">
                                        Secondary Stage
                                        <small className="d-block small-text fw-normal">Grade 9-12</small>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                {/* Foundational Stage Tab */}
                                <Tab.Pane eventKey="found-stage" className="found-stage">
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <p>The Foundational stage under the National Education Policy 2020 will cover school education of 3 years of Anganwadi/pre-school + 2 years in primary schools in Grade 1-2; both covering ages 3-8. The Foundational Stage will consist of five years of flexible, multilevel, play/activity-based learning and the curriculum and pedagogy of ECCE.</p>
                                        </Col>
                                    </Row>
                                    <Row className="explore-filter">
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Select Board <span className="required">*</span></label>
                                            <select name="state" id="state1" className="form-select custom-fc explore-state-boards"
                                                tabIndex={0} aria-label="Select State" role="presentation" title="state name">
                                                <option value="Select Board">Select Board</option>
                                            </select>
                                        </Col>
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Select Grade <span className="required">*</span></label>
                                            <select name="grade" id="grade1" className="form-select custom-fc explore-grade-levels"
                                                tabIndex={0} aria-label="Select Grade" role="presentation" title="grade name">
                                                <option value="Select Grade">Select Grade</option>
                                            </select>
                                        </Col>
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Content Type</label>
                                            <select name="contentType" id="contentType1" className="form-select custom-fc explore-content-type"
                                                tabIndex={0} aria-label="Select Content Type" role="presentation" title="content type name">
                                                <option value="">Select Content Type</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col md={12}>
                                            {/* <div id="foundStageCarousel"
                                                className="nistha-testimonial-carousel nistha-course-carousel parent-study-carousel carousel slide"
                                                data-bs-ride="carousel">
                                                <ol className="carousel-indicators" id='foundation-carousel-indicators'>
                                                </ol>
                                                <div className='carousel-inner' id='foundation-carousel-items'>
                                                </div>
                                                <a className="carousel-control-prev" href="#foundStageCarousel" role="button" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                </a>
                                                <a className="carousel-control-next" href="#foundStageCarousel" role="button" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                </a>
                                            </div> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="text-center view-btn-div">
                                            <a href="#" className="btn btn-primary study-view-more-btn view-study-courses-btn disabled">View More</a>
                                        </Col>
                                    </Row>
                                </Tab.Pane>

                                {/* Preparatory Stage Tab */}
                                <Tab.Pane eventKey="prep-stage" className="prep-stage">
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <p>The Preparatory Stage under the National Education Policy 2020 will cover school education from Grade 3 to Grade 5 catering children with age group of 8-11 years. The Preparatory Stage builds on the play-based learning of the Foundational Stage, introducing light textbooks and interactive classroom activities to develop skills in reading, writing, speaking, physical education, art, languages, science, and mathematics.</p>
                                        </Col>
                                    </Row>
                                    <Row className="explore-filter">
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Select Board <span className="required">*</span></label>
                                            <select name="state" id="state2" className="form-select custom-fc explore-state-boards"
                                                tabIndex={0} aria-label="Select State" role="presentation" title="state name">
                                                <option value="Select Board">Select Board</option>
                                            </select>
                                        </Col>
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Select Grade <span className="required">*</span></label>
                                            <select name="grade" id="grade2" className="form-select custom-fc explore-foundation-grade-levels"
                                                tabIndex={0} aria-label="Select Grade" role="presentation" title="grade name">
                                                <option value="Select Grade">Select Grade</option>
                                            </select>
                                        </Col>
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Content Type</label>
                                            <select name="contentType" id="contentType2" className="form-select custom-fc explore-content-type"
                                                tabIndex={0} aria-label="Select Content Type" role="presentation" title="content type name">
                                                <option value="">Select Content Type</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col md={12}>
                                            {/* <div id="prepStageCarousel"
                                                className="nistha-testimonial-carousel nistha-course-carousel parent-study-carousel carousel slide"
                                                data-bs-ride="carousel">
                                                <ol className="carousel-indicators" id='preparatory-carousel-indicators'>
                                                </ol>
                                                <div className='carousel-inner' id='preparatory-carousel-items'>
                                                </div>
                                                <a className="carousel-control-prev" href="#prepStageCarousel" role="button" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                </a>
                                                <a className="carousel-control-next" href="#prepStageCarousel" role="button" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                </a>
                                            </div> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="text-center view-btn-div">
                                            <a href="#" className="btn btn-primary study-view-more-btn view-study-courses-btn disabled">View More</a>
                                        </Col>
                                    </Row>
                                </Tab.Pane>

                                {/* Middle Stage Tab */}
                                <Tab.Pane eventKey="mid-stage" className="mid-stage">
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <p>The Middle stage under the National Education Policy 2020 will cover school education from Grade 6 to Grade 8 catering children with age group of 11-14 years. The Middle Stage builds on the Preparatory Stage by introducing subject teachers and focusing on abstract concepts in sciences, mathematics, arts, social sciences, and humanities. It emphasizes experiential learning and interdisciplinary exploration alongside specialized instruction.</p>
                                        </Col>
                                    </Row>
                                    <Row className="explore-filter">
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Select Board <span className="required">*</span></label>
                                            <select name="state" id="state3" className="form-select custom-fc explore-state-boards"
                                                tabIndex={0} aria-label="Select State" role="presentation" title="state name">
                                                <option value="Select Board">Select Board</option>
                                            </select>
                                        </Col>
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Select Grade <span className="required">*</span></label>
                                            <select name="grade" id="grade3" className="form-select custom-fc explore-mid-stage-grade-levels"
                                                tabIndex={0} aria-label="Select Grade" role="presentation" title="grade name">
                                                <option value="Select Grade">Select Grade</option>
                                            </select>
                                        </Col>
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Content Type</label>
                                            <select name="contentType" id="contentType3" className="form-select custom-fc explore-content-type"
                                                tabIndex={0} aria-label="Select Content Type" role="presentation" title="content name">
                                                <option value="">Select Content Type</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col md={12}>
                                            {/* <div id="midStageCarousel"
                                                className="nistha-testimonial-carousel nistha-course-carousel parent-study-carousel carousel slide"
                                                data-bs-ride="carousel">
                                                <ol className="carousel-indicators" id='middle-carousel-indicators'>
                                                </ol>
                                                <div className='carousel-inner' id='middle-carousel-items'>
                                                </div>
                                                <a className="carousel-control-prev" href="#midStageCarousel" role="button" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                </a>
                                                <a className="carousel-control-next" href="#midStageCarousel" role="button" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                </a>
                                            </div> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="text-center view-btn-div">
                                            <a href="#" className="btn btn-primary study-view-more-btn view-study-courses-btn disabled">View More</a>
                                        </Col>
                                    </Row>
                                </Tab.Pane>

                                {/* Secondary Stage Tab */}
                                <Tab.Pane eventKey="sec-stage" className="sec-stage">
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <p>The Secondary stage under the National Education Policy 2020 will cover school education from Grade 9 to Grade 12. catering children with age group of 14-18 years. The Secondary Stage offers four years of multidisciplinary study, building on the Middle Stage with deeper subject focus, critical thinking, flexibility, and student choice. Students may exit after Grade 10 and re-enter later to pursue vocational or other courses in Grades 11-12.</p>
                                        </Col>
                                    </Row>
                                    <Row className="explore-filter">
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Select Board <span className="required">*</span></label>
                                            <select name="state" id="state4" className="form-select custom-fc explore-state-boards"
                                                tabIndex={0} aria-label="Select State" role="presentation" title="state name">
                                                <option value="Select Board">Select Board</option>
                                                <option value="apekx" id="ap_k-12_1">Andhra Pradesh</option>
                                                <option value="ar" id="ar_k-12">Arunachal Pradesh</option>
                                                <option value="as" id="as_k-12">Assam</option>
                                                <option value="br" id="br_k-12">Bihar</option>
                                                <option value="ch" id="ch_k-12">Chandigarh</option>
                                                <option value="cg" id="cg_k-12">Chhattisgarh</option>
                                                <option value="dl" id="dl_k-12_1">Delhi</option>
                                                <option value="ga" id="ga_k-12">Goa</option>
                                                <option value="gj" id="gj_k-12">Gujarat</option>
                                                <option value="hr" id="hr_k-12">Haryana</option>
                                                <option value="hp" id="hp_k-12">Himachal Pradesh</option>
                                                <option value="jk" id="jk_k-12">Jammu And Kashmir</option>
                                                <option value="jh" id="jh_k-12">Jharkhand</option>
                                                <option value="ka" id="ka_k-12">Karnataka</option>
                                                <option value="kl" id="kl_k-12">Kerala</option>
                                                <option value="mp" id="mp_k-12">Madhya Pradesh</option>
                                                <option value="mitra" id="mh_k-12_1">Maharashtra</option>
                                                <option value="mn" id="mn_k-12">Manipur</option>
                                                <option value="ml" id="ml_k-12">Meghalaya</option>
                                                <option value="mz" id="mz_k-12">Mizoram</option>
                                                <option value="nl" id="nl_k-12">Nagaland</option>
                                                <option value="od" id="od_k-12">Odisha</option>
                                                <option value="pb" id="pb_k-12">Punjab</option>
                                                <option value="rj" id="rj_k-12">Rajasthan</option>
                                                <option value="sk" id="sk_k-12_1">Sikkim</option>
                                                <option value="tn" id="tn_k-12_5">Tamil Nadu</option>
                                                <option value="ts" id="ts_k-12">Telangana</option>
                                                <option value="tp" id="tp_k-12">Tripura</option>
                                                <option value="up" id="up_k-12">Uttar Pradesh</option>
                                                <option value="uk" id="uk_k-12">Uttarakhand</option>
                                                <option value="wb" id="wb_k-12">West Bengal</option>
                                                <option value="an" id="an_k-12">Andaman and Nicobar Islands</option>
                                                <option value="DD" id="dd_k-12">Dadra & Nagar Haveli & Daman & Diu</option>
                                                <option value="ld" id="ld_k-12">Ladakh</option>
                                                <option value="lk" id="lk_k-12">Lakshadweep</option>
                                                <option value="py" id="py_k-12">Puducherry</option>
                                            </select>
                                        </Col>
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Select Grade <span className="required">*</span></label>
                                            <select name="grade" id="grade4" className="form-select custom-fc explore-sec-stage-grade-levels"
                                                tabIndex={0} aria-label="Select Grade" role="presentation" title="grade name">
                                                <option value="Select Grade">Select Grade</option>
                                            </select>
                                        </Col>
                                        <Col md={4} className="mb-3 filter-wrap">
                                            <label className="form-label">Content Type</label>
                                            <select name="contentType" id="contentType4" className="form-select custom-fc explore-content-type"
                                                tabIndex={0} aria-label="Select Content Type" role="presentation" title="content type name">
                                                <option value="">Select Content Type</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col md={12}>
                                            {/* <div id="secStageCarousel"
                                                className="nistha-testimonial-carousel nistha-course-carousel parent-study-carousel carousel slide"
                                                data-bs-ride="carousel">
                                                <ol className="carousel-indicators" id='secondary-carousel-indicators'>
                                                </ol>
                                                <div className='carousel-inner' id='secondary-carousel-items'>
                                                </div>
                                                <a className="carousel-control-prev" href="#secStageCarousel" role="button" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                </a>
                                                <a className="carousel-control-next" href="#secStageCarousel" role="button" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                </a>
                                            </div> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="text-center view-btn-div">
                                            <a href="#" className="btn btn-primary study-view-more-btn view-study-courses-btn disabled">View More</a>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BrowsebyGrade;