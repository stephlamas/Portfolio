import { Row, Col } from "react-bootstrap";
import './ProfileMenu.css'
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import { BsGithub } from "react-icons/bs";


const ProfileMenu = () => {
  return (
    <>
      <Row>
        <Col>
          <Image className="mt-3 mb-3 profile-picture" src="../../../images/EstefaniaL_square.jpg" roundedCircle thumbnail/>
        </Col>
      </Row>
      <Row className="box mb-3">
        <Col><span>Estefanía Lamas</span></Col>
      </Row>
      <Row className="box">
        <Col>
            <span><BsGithub /> Github</span>
        </Col>
      </Row>
    </>
  );
};

export default ProfileMenu;
