import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './StephsCV.css'

const StephsCV = () => {

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

  return (
    <div>
      <div className="welcome">Hi there 👋 I'm</div>
      <p className="name">Estefanía Lamas</p>
      <p className="self-title">WEB DEVELOPER & TRANSLATOR </p>
      <div className="language-logos">
        { images.map(i => <img src={i} width="40px" /> ) }
      </div>

      <div className="self-definition">
        <p>Ironhack graduate web developer </p>
        <p> English-Spanish translator</p>
        <p> Part-time photograher </p>
      </div>
    </div>
  );
};

export default StephsCV;
