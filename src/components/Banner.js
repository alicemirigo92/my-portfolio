import React, { useState, useEffect } from 'react';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assests/images/header-img.svg';
import 'animate.css';

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ['A Software Developer', 'JavaScript/React.js Lover', 'Web Designer', 'Ruby on Rails Ethusiast'];
  const period = 2000;

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {"Hello! I'm Gathoni."}{' '}
                    <span className="txt-rotate" data-period="1000" data-rotate='["A Software Developer", "JavaScript/React.js Lover", "And A Web Designer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    As a software developer, I am skilled in a variety of programming
                    languages and frameworks.
                    I am passionate about creating clean, efficient,
                    and scalable code that helps solve real-world problems.
                    I enjoy working collaboratively with other developers,
                    designers, and stakeholders to deliver high-quality software products.
                  </p>

                  <div>
                    <button className="vd" type="button" aria-label="Contact Me">
                      Contact Me
                      <a href="#connect"><ArrowRightCircle size={25} color="white" /></a>
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
