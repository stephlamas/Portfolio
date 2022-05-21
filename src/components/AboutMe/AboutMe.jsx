import React from "react";
import "./AboutMe.css";
import { BsTranslate } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import { HiOutlineCamera } from "react-icons/hi";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const AboutMe = ({ photoPath, aboutMe, ref }) => {

    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <section id="about">
      <h2>About me</h2>

      <div className="container about__container" data-aos="fade-right">
        <div className="about__me">
          <div className="about__me-image">
            <img src={photoPath} alt="About Image" />
          </div>
        </div>

        <div className="about__content" data-aos="fade-right">
          <div className="about__cards">
            <article className="about__card">
              <HiOutlineCode className="about__icon" />
              <h5>Developer</h5>
              <small></small>
            </article>

            <article className="about__card">
              <BsTranslate className="about__icon" />
              <h5>Translator</h5>
              <small></small>
            </article>

            <article className="about__card">
              <HiOutlineCamera className="about__icon" />
              <h5>Photographer </h5>
              <small></small>
            </article>
          </div>

          <p>{aboutMe}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
