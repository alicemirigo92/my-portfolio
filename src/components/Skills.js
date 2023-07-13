import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assests/images/meter1.svg';
import meter2 from '../assests/images/meter2.svg';
import meter3 from '../assests/images/meter3.svg';
import colorSharp from '../assests/images/color-sharp.png';

export function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>The expert in anything was once a beginner</p>
              <Carousel responsive={responsive} infinite className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>HTML5/CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Img" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Img" />
                  <h5>Ruby on Rails</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Img" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Img" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>Remote Pair-Programming</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>Teamwork</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Img" />
                  <h5>Git/Github</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  );
}

export default Skills;
