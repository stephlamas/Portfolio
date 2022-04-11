
const Project = ({ title, description, technologies, projectPhoto }) => {
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <p>{technologies}</p>
      <p>{projectPhoto}</p>
    </>
  );
};

export default Project;