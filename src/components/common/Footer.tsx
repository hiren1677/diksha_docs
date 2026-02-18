import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DikshaLogo from '../../assets/img_logo_diksha.png';
import logoNcert from '../../assets/img_logo_ncert.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="main-footer pt-5 pb-5">
        <Container className="d-md-flex align-items-center">
            <div className="logo-and-tagline mb-4">
                <span className="d-flex gap-4 mb-3">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={DikshaLogo} alt="Diksha Logo" className="footer-diksha-logo" />
                    </a>
                    <span className="text-nowrap border-start border-black ps-4 digital-infra-text d-flex align-items-center">Digital Infrastructure<br/>For Knowledge Sharing</span>
                </span>
                <span className="d-block mt-4 ncert-logo"><a href="https://ncert.nic.in/"><img src={logoNcert} alt="NCERT Logo" className="img-fluid" /></a></span>
            </div>
            <div className="raise-a-query">
                <h2 className="section-title">Need help?</h2>
                <p data-translate="newNeedHelpDesc">Have questions or facing issues? We're here to help.</p>
                <a href="https://dev-support.diksha.gov.in/login.php?do=ext&bk=oauth2.user.p2i2" id="raise-a-query-link" className="btn btn-primary btn-lg" data-translate="newRaiseaQuery">Raise a Query</a>
            </div>
        </Container>
    </div>
    <div className="footer-bar pb-3">
        <Container>
            <Row>
                <Col md={12}>
                    <ul>
                        <li data-translate="newCopyRights">&copy; 2026 DIKSHA. All rights reserved.</li>
                        <li><a href="https://www.education.gov.in/" target="_blank" data-translate="newMinistryOfEducation">Ministry of Education</a>, <span data-translate="newGovernmentOfIndia">Government of India.</span></li>
                        <li><a href="/term-of-use.html#privacyPolicy" data-translate="newPrivacyPolicy">Privacy Policy</a></li>
                        <li><a href="/term-of-use.html#termsOfUse" data-translate="newTermsOfService">Terms of Service</a></li>
                        <li><a href="/screenreaderaccess.html" data-translate="newAccessibility">Accessibility</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
    </footer>
  );
};

export default Footer;
