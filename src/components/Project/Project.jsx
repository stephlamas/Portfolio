import './Project.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project = ({title, photo, githubUrl, demo, technologies}) => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <>
      <article key={title} className="showcase__item" data-aos="fade-left">
        <div className="showcase__item-image">
          <img src={photo} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="showcase__item-technologies">{technologies}</div>
        <div className="showcase__item-cta">
          <a href={githubUrl} className="btn">
            Github
          </a>
          <a href={demo} className="btn btn-primary">
            Live Demo
          </a>
        </div>
      </article>
    </>
  );
};

export default Project;