import "./AboutMe.css";

const AboutMe = ({ title, content }) => {

  return (
    <div>
      <p className="self-title"> { title } </p>
      <div className="self-definition">
        <p> { content } </p>
      </div>
   </div>
  );
};

export default AboutMe;
