import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import MainLayout from '../layouts/MainLayout';

const ContributePage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contribution submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your contribution!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <MainLayout>
      <div>
        <h1 className="display-5 mb-4">Contribute to Diksha</h1>
        <p className="lead mb-4">
          Share your knowledge and help others learn. Your contributions make a difference!
        </p>
        
        <Row>
          <Col lg={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="mb-4">Submit Your Content</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="title">Title</Form.Label>
                    <Form.Control
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      placeholder="Enter the title of your contribution"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="category">Category</Form.Label>
                    <Form.Select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="programming">Programming</option>
                      <option value="design">Design</option>
                      <option value="business">Business</option>
                      <option value="science">Science</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      required
                      placeholder="Provide a brief description"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="content">Content</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="content"
                      name="content"
                      rows={8}
                      value={formData.content}
                      onChange={handleChange}
                      required
                      placeholder="Share your knowledge here..."
                    />
                  </Form.Group>
                  
                  <Button type="submit" variant="primary">
                    Submit Contribution
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card bg="light">
              <Card.Body>
                <Card.Title>Contribution Guidelines</Card.Title>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Be clear and concise</li>
                  <li className="mb-2">✓ Provide accurate information</li>
                  <li className="mb-2">✓ Include examples when possible</li>
                  <li className="mb-2">✓ Respect copyright and attribution</li>
                  <li className="mb-2">✓ Be respectful and inclusive</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default ContributePage;
