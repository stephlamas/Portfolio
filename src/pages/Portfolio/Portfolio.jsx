import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Portfolio.css";
import portfolioService from "../../services/portfolio.service";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import AboutMe from "../../components/AboutMe/AboutMe";
import Showcase from "../../components/Showcase/Showcase";
import Project from "../../components/Project/Project";
import Skills from "../../components/Skills/Skills";

const Portfolio = () => {
  
  const [profile, setProfile] = useState();

  useEffect(() => {
    portfolioService
      .findProfileByName("elamas")
      .then((r) => setProfile(r))
      .catch((err) => console.log(err));
  }, []);

  return (
    profile && (
      <Container id="home-page" fluid className="ps-5 pe-5">
      <Header 
      name={profile.name}
      title={profile.profession}
      photoPath={profile.photoUrl} 
      />
        <Navigation />
        <AboutMe 
        photoPath={profile.photoUrl}
        />
        {/* <Row>
        
          <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <Introduction name={profile.name} />
            <AboutMe
              content={profile.aboutMe}
              title={profile.profession}
              emailAddress={profile.emailAddress}
              linkedinProfileName={profile.linkedinUser}
              githubProfileName={profile.githubUser}
              photoPath={profile.photoUrl}
            />
          </Col>
        </Row>
        <Showcase theme={profile.showcaseTheme}>
          <div className="div-box">
            {profile.showcaseProjects.map((e, index) => (
              <div key={index} className="project-box p-3">
                <Project
                  title={e.title}
                  description={e.description}
                  technologies={e.technologies}
                  photo={e.projectPhoto}
                />
              </div>
            ))}
          </div>
        </Showcase> */}

        <Skills />
      </Container>
    )
  );
};

export default Portfolio;
