import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import "./light.css";
import "./Portfolio.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AboutMe from "../../components/AboutMe/AboutMe";

import portfolioService from "../../services/portfolio.service";
import Introduction from "../../components/Introduction/Introduction";
import Showcase from "../../components/Showcase/Showcase";
import Project from "../../components/Project/Project";
import Skills from "../../components/Skills/Skills";

const Portfolio = () => {
  const images = [
    "../../../images/javascript.png",
    "../../../images/react.png",
    "../../../images/mongodb.png",
    "../../../images/nodejs.png",
    "../../../images/express.png",
    "../../../images/html.png",
    "../../../images/css.png",
    "../../../images/bootstrap.png",
  ];
  const [profile, setProfile] = useState();


  useEffect(() => {
    portfolioService
      .findProfileByName("elamas")
      .then(r => setProfile(r))
      .catch(err => console.log(err));
  }, []);

  return (
    profile && (
      <Container id="home-page" fluid className="ps-5 pe-5">
        <Row>
          <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <ProfileCard
              name={profile.name}
              photoPath={profile.photoUrl}
              emailAddress={profile.emailAddress}
              linkedinProfileName={profile.linkedinUser}
              githubProfileName={profile.githubUser}
            />
          </Col>
          <Col>
            <Introduction name={profile.name} />
            <AboutMe content={profile.aboutMe} title={profile.profession} />
            <div className="language-logos">
              {images.map((e, index) => (
                <img src={e} key={index} width="40px" />
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Showcase theme={profile.showcaseTheme}>
              <Row xs={1} md={2} lg={3} className="g-md-3 g-lg-5">
                {profile.showcaseProjects.map((e, index) => (
                  <Col key={index} className="project-box p-3">
                    <Project
                      title={e.title}
                      description={e.description}
                      technologies={e.technologies}
                      photo={e.projectPhoto}
                    />
                  </Col>
                ))}
              </Row>
            </Showcase>
          </Col>
        </Row>
        <Skills />
      </Container>
    )
  );
};


export default Portfolio;
