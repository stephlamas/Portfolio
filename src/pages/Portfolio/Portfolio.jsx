import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './light.css'
import "./Portfolio.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AboutMe from "../../components/AboutMe/AboutMe";

import portfolioService from "../../services/portfolio.service";
import Introduction from "../../components/Introduction/Introduction";

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
  const [profile, setProfile] = useState({});

  useEffect(() => {
    portfolioService.findProfileByName('elamas')
      .then((r) => setProfile(r))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container id="home-page" fluid>
      <Row>
        <Col lg={{ span: 3 }} md={{ span: 6 }} className="ms-4">
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
          <AboutMe content={profile.aboutMe}
          title={profile.profession} />
          <div className="language-logos">
            {images.map((i) => (
              <img src={i} width="40px" />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
