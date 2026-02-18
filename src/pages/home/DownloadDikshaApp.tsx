import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import googlePlayStoreIcon from '../../assets/img_google_play_store.svg';
import iosAppStoreIcon from '../../assets/img_ios_app_store.svg';

const DownloadDikshaApp: React.FC = () => {
    return (
        <section className="download-diksha py-5">
            <Container>
                <h2 className="mb-4 section-title">Download DIKSHA App Now</h2>
                <Row>
                    <Col md={7} className="mb-3 d-none d-sm-none d-md-block">
                        <p>
                            Access learning resources anytime, anywhere. Available for Android and iOS devices. Learn on the
                            go with offline mode and personalized recommendations.
                        </p>
                        <ul>
                            <li>Works on low bandwidth</li>
                            <li>Offline content download</li>
                            <li>Available in 36+ languages</li>
                            <li>Personalized learning path</li>
                        </ul>
                    </Col>
                    <Col md={5} className="col-6 mb-3 text-center">
                        <div className="qr-code mb-3">
                            <img src="https://files.odev.oci.diksha.gov.in/dev-contents-storage/QRscannerDiksha.png" className="img-fluid qr-code" alt="" />
                        </div>
                        <p className="small text-muted">Scan to Download</p>
                    </Col>
                    <Col md={7} className="col-6 mb-3 d-flex align-items-center">
                        <div className="d-flex flex-column flex-md-row gap-3">
                            <a href="https://play.google.com/store/apps/details?id=in.gov.diksha.app&hl=en&gl=US" target="_blank">
                                <img src={googlePlayStoreIcon} height="40" alt="" />
                            </a>
                            <a href="https://apps.apple.com/in/app/diksha/id1587874277" target="_blank">
                                <img src={iosAppStoreIcon} height="40" alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col md={5} className="mb-3">
                        <div className="d-flex align-items-center justify-content-center gap-3 text-center">
                            <div className="downloads-and-ratings px-4 py-2">
                                <span className="d-block text-nowrap count-and-ratings">5Cr+</span>
                                <span className="d-block" data-translate="newDownloadDikshaAppDownload">App Downloads</span>
                            </div>
                            <div className="downloads-and-ratings px-4 py-2">
                                <span className="d-block text-nowrap count-and-ratings">4.1<i className="fas fa-star fa-2xs"></i></span>
                                <span className="d-block">On Playstore</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default DownloadDikshaApp;