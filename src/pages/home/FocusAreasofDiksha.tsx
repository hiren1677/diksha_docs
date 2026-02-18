import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NipunBharat from "../../assets/img_nipun_bharat.png";
import BhashaSangam from "../../assets/img_bhasha_sangam.png";
import JaaduiPitaara from "../../assets/img_jaadui_pitaara.png";
import EducationForAll from "../../assets/img_education_for_all.png";
import VirtualLab from "../../assets/img_virtual_lab.png";
import VocationalEducation from "../../assets/img_vocational_education.png";
import EquitableInclusiveEducation from "../../assets/img_equitable_inclusive_education.png";

const FocusAreasofDiksha: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        }
    ]
  };
  const focusAreas = [
    {
      title: 'Nipun Bharat',
      description: 'National Initiative for Proficiency in Reading with Understanding and Numeracy.',
      image: NipunBharat,
      link: '#'
    },
    {
      title: 'Bhasha Sangam',
      description: 'National Initiative to teach basic sentences of everyday usage in 22 Indian languages.',
      image: BhashaSangam,
      link: '#'
    },
    {
      title: 'e-Jaadui Pitara',
      description: 'Foundational Stage Content with toys, games, puzzles, puppets, posters, flashcards etc.',
      image: JaaduiPitaara,
      link: '#'
    },
    {
      title: 'Education For All',
      description: 'To impart foundational literacy and numeracy, critical life skills for citizens',
      image: EducationForAll,
      link: '#'
    },
    {
      title: 'Virtual Lab',
      description: 'Virtual laboratories access for students to enhance actual laboratory experiences',
      image: VirtualLab,
      link: '#'
    },
    {
      title: 'Vocational Education',
      description: 'Initiative to focus on integration of vocational training with general education',
      image: VocationalEducation,
      link: '#'
    },
    {
      title: 'Equitable and Inclusive Education - Learning for All',
      description: 'Initiative to ensure equitable and inclusive education for students with diverse learning needs',
      image: EquitableInclusiveEducation,
      link: '#'
    }
  ];

  return (
    <div className="focus-areas py-5">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="mb-4 section-title">Focus Areas of DIKSHA</h2>
              <Slider {...settings}>
                {focusAreas.map((area, index) => (
                    <a href={area.link} key={index} className="h-100">
                      <Row className="h-100">
                        <Col md={12} className="d-flex flex-column">
                          <Card className="flex-fill">
                            <Card.Header className="py-3 d-flex align-items-center">
                              <img 
                                src={area.image} 
                                className="stage-icon me-3 p-2"
                                alt={area.title} 
                              />
                            </Card.Header>
                            <Card.Body className="py-0">
                              <h3>{area.title}</h3>
                              <p>{area.description}</p>
                            </Card.Body>
                            <Card.Footer className="d-flex align-items-center pb-3 fw-bold">
                              Learn More <i className="fas fa-arrow-right ms-2"></i>
                            </Card.Footer>
                          </Card>
                        </Col>
                      </Row>
                    </a>
                ))}
              </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FocusAreasofDiksha;