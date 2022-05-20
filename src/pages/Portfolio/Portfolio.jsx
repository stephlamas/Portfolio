import { useEffect, useRef, useState } from "react";

import "./Portfolio.css";
import portfolioService from "../../services/portfolio.service";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import AboutMe from "../../components/AboutMe/AboutMe";
import Showcase from "../../components/Showcase/Showcase";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  
  const [profile, setProfile] = useState();

  useEffect(() => {
    portfolioService
      .findProfileByName("elamas")
      .then((r) => setProfile(r))
      .catch((err) => console.log(err));
  }, []);

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const skillsRef = useRef();
  const showCaseRef = useRef();

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
          ref={homeRef}
        />
        <Navigation
          emailAddress={profile.emailAddress}
          homeRef={homeRef}
          aboutRef={aboutMeRef}
          skillsRef={skillsRef}
          showCaseRef={showCaseRef}
        />

        <AboutMe
          photoPath={profile.photoUrl2}
          aboutMe={profile.aboutMe}
          ref={aboutMeRef}
        />

        <Skills ref={skillsRef} />

        <Showcase ref={showCaseRef}>
          {profile.showcaseProjects.map((p) => (
            <>
              <article key={p.title} className="showcase__item">
                <div className="showcase__item-image">
                  <img src={p.projectPhoto} alt={p.title} />
                </div>
                <h3>{p.title}</h3>
                <div className="showcase__item-cta">
                  <a href={p.github} className="btn">
                    Github
                  </a>
                  <a href={p.demo} className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </article>
            </>
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
