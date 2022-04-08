import { Row, Col } from "react-bootstrap";
import './ProfileMenu.css'
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import { BsGithub, BsLinkedin, BsPersonCircle } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


const ProfileMenu = () => {
  return (
    <>
      <Row className="mt-4 ms-9">
        <Col>
          <Image
            className="mt-3 mb-3 profile-picture"
            src="../../../images/EstefaniaL_square.jpg"
          />
        </Col>
      </Row>
      <Row className="box mb-3">
        <Col>
          <span>
            {" "}
            <BsPersonCircle /> Estefanía Lamas
          </span>
        </Col>
      </Row>
      <Row className="box mb-3">
        <Col>
          <span>
            <BsGithub /> <a href="www.github.com">Github</a>
          </span>
        </Col>
      </Row>
      <Row className="box mb-3">
        <Col>
          <span>
            <BsLinkedin /> LinkedIn
          </span>
        </Col>
      </Row>
      <Row className="box">
        <Col>
          <span>
            <HiOutlineMail /> esteflamas@gmail.com
          </span>
        </Col>
      </Row>
    </>
  );
};

export default ProfileMenu;
