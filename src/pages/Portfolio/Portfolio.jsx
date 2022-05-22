import { useEffect, useState } from "react";

import "./Portfolio.css";
import portfolioService from "../../services/portfolio.service";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import AboutMe from "../../components/AboutMe/AboutMe";
import Showcase from "../../components/Showcase/Showcase";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";

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
      <>
        <Header
          name={profile.name}
          title={profile.profession}
          photoPath={profile.photoUrl}
          linkedinProfileName={profile.linkedinUser}
          githubProfileName={profile.githubUser}
          emailAddress={profile.emailAddress}
        />
        <Navigation
          emailAddress={profile.emailAddress}
        />

        <AboutMe
          photoPath={profile.photoUrl2}
          aboutMe={profile.aboutMe}
        />

        <Skills />

        <Showcase>
          {profile.showcaseProjects.map(p => (
            <Project 
              title={p.title}
              githubUrl={p.github}
              photo={p.projectPhoto}
              demo={p.demo}
              description={p.description}
              technologies={p.technologies}
            />
          ))}
        </Showcase>

        <Contact emailAddress={profile.emailAddress} />
        
        <Footer
          linkedinProfileName={profile.linkedinUser}
          githubProfileName={profile.githubUser}
          emailAddress={profile.emailAddress}
        />
      </>
    )
  );
};

export default Portfolio;
