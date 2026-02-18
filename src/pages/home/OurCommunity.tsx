import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StarRatings from '../../assets/icon_star_ratings.png';
import StarRatingsBlank from '../../assets/icon_star_ratings_blank.png';
import QuotationMark from '../../assets/icon_testimonials.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  quote: string;
  author: string;
  rating: number; // 1-5
}

const OurCommunity: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: `"A Great Platform for Digital Learning!" I've been using the DIKSHA app for a few months now, and it's a fantastic tool for both teachers and students. The content is aligned with the NCERT curriculum, and the lessons are presented in a simple and engaging way. What I appreciate the most is the availability of resources in multiple Indian languages, making it accessible to a wide audience. The QR code scanning feature in textbooks is very convenient, and the video lessons are high quality.`,
      author: "Amartya Sharma",
      rating: 5
    },
    {
      quote: `"All the chapters are very good. Exercise fabulous for the students. Also, the teacher is taking part in doing actions reading, helping the student in their work, asking students to repeat the words and pronounce the words correctly. Students learn a lot by looking at the pictures, like knowing about birds, animals, fruits, vegetables, counting numbers, colors, parts of the body and their uses, where student will be interested. Also learning and tracing of alphabets and storytelling is good."`,
      author: "Lyra Fletcher",
      rating: 5
    },
    {
      quote: `"This application is wonderful to attend the online training as well as station Island many things to the session from this app. in future I will attend more and more online station to DIKSHA app really, it's a wonderful because such of the session increasing day by day by knowledge as well as professional development skills I really thanks to DIKSHA app as well as the committee member of DIKSHA because it's really wonderful scope for all the learners as well as educated. Thanks"`,
      author: "Pankaj Gupta",
      rating: 5
    },
    {
      quote: `"Good learning experience to teacher to guide student and how to motivate then in real life experience. Want to learn more about it thank you"`,
      author: "Shailaja Nerdam",
      rating: 4
    },
    {
      quote: `"I loved this app, it's so easy to use and helps me in finding the right content easily. The new AI feature AskDIKSHA is too good. I can easily query the NCERT books. It was so easy to get my concepts cleared."`,
      author: "Anandee Kar",
      rating: 5
    },
    {
      quote: `"DIKSHA is a very user-friendly and powerful learning platform with high-quality content. The Ask DIKSHA feature makes learning interactive by helping users quickly clear doubts, while Read Aloud improves accessibility and supports better understanding for all learners. With well-structured courses, smooth performance, and inclusive features, DIKSHA is an excellent app for students and teachers alike."`,
      author: "Lovi Gupta",
      rating: 5
    },
    {
      quote: `"I'm very impressed with the new UI and appreciate the government initiative ."`,
      author: "Elvin Kharkongor",
      rating: 4
    },
    {
      quote: `"DIKSHA courses are very much useful for the teachers as well for the students. I am very much benefited from the courses."`,
      author: "Goma Joshi",
      rating: 5
    },
    {
      quote: `"Very nice and useful, clear and effective for everyone especially in attending the classes and receiving the certificates for all and it is very informative and motivating. DIKSHA covers A to Z. Concepts are explained in simple words. This makes everybody happy and informative. Every time when we are using it we feel happy and energetic to use this app. Thank you so much"`,
      author: "Rajini Siva",
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
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

  const renderStars = (rating: number) => {
    return (
      <ul className="list-inline">
        {Array.from({ length: 5 }).map((_, index) => (
          <li className="list-inline-item" key={index}>
            <img src={index < rating ? StarRatings : StarRatingsBlank} alt="" />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="our-community py-5">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="mb-4 section-title">Voices from Our Community</h2>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2">
                  <div className="card h-100 d-flex flex-column">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <img src={QuotationMark} className="stage-icon me-3 p-3" alt="Quotation Mark" />
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column flex-grow-1">
                      <p className="flex-grow-1">{testimonial.quote}</p>
                      <hr className="my-2" />
                      <p className="mb-0"><strong>{testimonial.author}</strong></p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurCommunity;
