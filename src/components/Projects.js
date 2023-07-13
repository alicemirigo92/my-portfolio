import React from 'react';
import {
  Container, Row, Col, Tab, Nav,
} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';
import projImg1 from "../assests/images/proj1.PNG";
import projImg2 from "../assests/images/project2.PNG";
import projImg3 from "../assests/images/project 5.PNG";
import projImg4 from "../assests/images/project 4.PNG";
import projImg5 from "../assests/images/project 6.PNG"
import colorShape2 from "../assests/images/color-sharp2.png";
import 'animate.css';

export const Projects = () => {
  const firstProjects = [
    {
      title: "Math Magician",
      description: "Math is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.",
      imgUrl: projImg1,
      link: 'https://willowy-pegasus-c94167.netlify.app/',
      GitHub: "https://github.com/alicemirigo92/math-magicians"
    },

    {
      title: "Nice Cars",
      description: "A collaborative Full-stack development project to build a React-Redux frontend site linked with a Ruby on Rails API app. The app allows users to create accounts, add & delete cars, reserve cars, and view their reservations. Authentication done using devise-JWT (JSON web token).",
      imgUrl: projImg2,
      link: "https://singular-speculoos-77f925.netlify.app/",
      GitHub: "https://github.com/alicemirigo92/nice-car-back-and"
    },
  ];

  const secondProjects = [
    {
      title: "Agri Expo",
      description: "Module 1 final capstone. The project theme is mainly focused on the agricultural event invitation expo to showcase different agricultural products.",
      imgUrl: projImg3,
      link: "https://alicemirigo92.github.io/Agri-Expo/",
      GitHub: "https://alicemirigo92.github.io/Agri-Expo/",
    },

    {
      title: "React capstone",
      description: "Countries App is a project to build a mobile app using React/Redux that shows countries with different region and flags . Users can view their city , and they will obtain results from the API.",
      imgUrl: projImg4,
      link: "https://clever-lebkuchen-1c7456.netlify.app/",
      GitHub: "https://github.com/alicemirigo92/react-capstone"
    },
  ];

  const thirdProjects = [
    {
      title: 'Space Hub',
      description: 'A project built with React that provides information about space rockets. Enables interested users to join and leave missions and reserve rockets. ',
      imgUrl: projImg5,
      link: 'https://imaginative-mermaid-1fb6f5.netlify.app/',
      GitHub: 'https://github.com/alicemirigo92/space-traveller-s-hub',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Bringing ideas to life, one project at a time: A showcase of my
                    latest work.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {thirdProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorShape2} alt="Img"></img>
    </section>
  );
};  