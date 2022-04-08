import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './StephsCV.css'

const Header = () => {
  return (
    <>
      <div className="welcome">Hi there 👋 I'm</div>
      <p className="name">Estefanía Lamas</p>
      <p className="self-title">WEB DEVELOPER & TRANSLATOR </p>
      <p className="language-logos">
        <img className="language-logo" src="../../../images/react.png" alt="" />
        <img
          className="language-logo"
          src="../../../images/javascript.png"
          alt=""
        />
        <img
          className="language-logo"
          src="../../../images/mongodb.png"
          alt=""
        />
        <img
          className="language-logo"
          src="../../../images/nodejs.png"
          alt=""
        />
        <img
          className="language-logo"
          src="../../../images/express.png"
          alt=""
        />
        <img className="language-logo" src="../../../images/html.png" alt="" />
        <img className="language-logo" src="../../../images/css.png" alt="" />
        <img
          className="language-logo"
          src="../../../images/bootstrap.png"
          alt=""
        />
      </p>
      <div className="self-definition">
        <p>
          <img
            className="ironhack-logo"
            src="../../../images/ironhack.svg"
            alt=""
          />{" "}
          Ironhack graduate web developer
        </p>
        <p className="translator">
          <img className="language-logo" src="../../../images/translating.png" alt="" />{" "}
          English-Spanish translator{" "}
        </p>
        <p className="photographer">📸 Part-time photograher</p>
      </div>
    </>
  );
};

export default Header;
