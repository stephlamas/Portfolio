import "./Showcase.css";



const Showcase = ({ title, description, technologies, photo, github, demo }) => {
  return (
    <section id="showcase">
      <h2>My Recent Work</h2>
      <div className="container showcase__container">
              <article key={title} className="showcase__item">
                <div className="showcase__item-image">
                  <img src={photo} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="showcase__item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </article>
      </div>
    </section>
  );
};

export default Showcase;
