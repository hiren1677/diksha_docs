import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const DashboardView: React.FC = () => {
    return (
        <Container fluid className="mt-5">
            <Row>
                <Col md={12}>
                    <iframe src="https://diksha-data.diksha.gov.in/login/?username=anandarup.kar@trigyn.com&redirect=/bi/dashboard/dashboard_details/?standalone=1&show_filters=0" width="100%" height="500" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"></iframe>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardView;