import { useEffect, useState } from "react";

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
      <>
        <Header
          name={profile.name}
          title={profile.profession}
          photoPath={profile.photoUrl}
          linkedinProfileName={profile.linkedinUser}
          githubProfileName={profile.githubUser}
          emailAddress={profile.emailAddress}
        />
        <Navigation />
        <AboutMe photoPath={profile.photoUrl} />
        <Skills />

        {profile.showcaseProjects.map((e, index) => (
          <div key={index}>
            <Showcase
              title={e.title}
              description={e.description}
              technologies={e.technologies}
              photo={e.projectPhoto}
              github={e.githubUrl}
              demo={e.demo}
            />
          </div>
        ))}
      </>
    )
  );
};

export default Portfolio;
