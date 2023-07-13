import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assests/images/nav-icon1.svg';
import navIcon2 from '../assests/images/github.svg';
import navIcon3 from '../assests/images/medium (1).svg';

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="d-flex justify-content-between align-items-center">
            <div className="social-icon ml-auto">
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/alice-mirigo/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a rel="noreferrer" target="_blank" href="https://github.com/alicemirigo92">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a rel="noreferrer" target="_blank" href="https://medium.com/@alicemirigo92">
                <img src={navIcon3} alt="Medium" className="Medium" />
              </a>
            </div>
            <p className="ml-3 mb-0">Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
