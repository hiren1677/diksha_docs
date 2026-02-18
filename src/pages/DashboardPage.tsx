import React from 'react';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import DashboardLayout from '../layouts/DashboardLayout';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-4">Dashboard</h1>
        
        <Row className="g-4 mb-4">
          <Col md={3}>
            <Card text="white" bg="primary">
              <Card.Body>
                <Card.Title>Total Courses</Card.Title>
                <Card.Text className="display-6">24</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card text="white" bg="success">
              <Card.Body>
                <Card.Title>Completed</Card.Title>
                <Card.Text className="display-6">12</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card text="white" bg="warning">
              <Card.Body>
                <Card.Title>In Progress</Card.Title>
                <Card.Text className="display-6">8</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card text="white" bg="info">
              <Card.Body>
                <Card.Title>Hours Learned</Card.Title>
                <Card.Text className="display-6">156</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8}>
            <Card className="mb-4">
              <Card.Header>
                <h5 className="mb-0">Recent Activity</h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Completed React Advanced Patterns</h6>
                      <small>2 hours ago</small>
                    </div>
                    <p className="mb-1">You've earned a certificate!</p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Started TypeScript Fundamentals</h6>
                      <small>1 day ago</small>
                    </div>
                    <p className="mb-1">Progress: 25%</p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">Contributed to Community</h6>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Your article received 45 likes</p>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card>
              <Card.Header>
                <h5 className="mb-0">Quick Actions</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-grid gap-2">
                  <Button variant="outline-primary">Browse Courses</Button>
                  <Button variant="outline-success">View Certificates</Button>
                  <Button variant="outline-info">Edit Profile</Button>
                  <Button variant="outline-secondary">Settings</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
