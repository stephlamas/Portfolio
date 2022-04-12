import './Project.css'

const Project = ({ title, description, technologies, photo }) => {
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <p>{technologies}</p>
      <img width="100%" src={photo} className="project-photo"/>
    </>
  );
};

export default Project;