import { Row, Col } from "react-bootstrap";
import './ProfileCard.css'
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import { BsGithub, BsLinkedin, BsPersonCircle } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


const ProfileMenu = ({
  name = "no name",
  photoPath,
  emailAddress = "no email address",
  linkedinProfileName,
  githubProfileName,
}) => {
  const linkedinUrlFor = (p) => `https://www.linkedin.com/in/${p}`;
  const githubUrlFor = (p) => `https://github.com/${p}`;

  return (
    <>
      <Row className="mt-4 ms-9">
        <Col>
          <Image className="mt-3 mb-3 profile-picture" src={photoPath} />
        </Col>
      </Row>
      <Row className="box mb-3">
        <Col>
          <span>
            {" "}
            <BsPersonCircle /> {name}
          </span>
        </Col>
      </Row>
      <Row className="box mb-3">
        <Col>
          <span>
            <BsGithub /> <a href={githubUrlFor(githubProfileName)}>Github</a>
          </span>
        </Col>
      </Row>
      {linkedinProfileName && (
        <Row className="box mb-3">
          <Col>
            <span>
              <BsLinkedin />{" "}
              <a href={linkedinUrlFor(linkedinProfileName)}>LinkedIn</a>
            </span>
          </Col>
        </Row>
      )}
      <Row className="box">
        <Col>
          <span>
            <HiOutlineMail /> {emailAddress}
          </span>
        </Col>
      </Row>
    </>
  );
};

export default ProfileMenu;
