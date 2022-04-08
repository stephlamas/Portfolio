import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="welcome">Hi there 👋 I'm</div>
      <p className="name">Estefanía Lamas</p>
      <p className="self-title">WEB DEVELOPER & TRANSLATOR</p>
      <div className="self-definition">
        <p>
          <img
            className="ironhack-logo"
            src="../../../images/ironhack.svg"
            alt=""
          />{" "}
          Ironhack graduate web developer
        </p>
        <p className="self-definition">📚 English-Spanish translator </p>
        <p className="photographer">📸 Part-time photograher</p>
      </div>
    </>
  );
};

export default Header;
