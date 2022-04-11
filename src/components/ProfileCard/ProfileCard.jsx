import { Row, Col } from "react-bootstrap";
import "./ProfileCard.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import { BsGithub, BsLinkedin, BsPersonCircle } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const ProfileCard = ({
  name,
  photoPath,
  emailAddress,
  linkedinProfileName,
  githubProfileName,
}) => {
  const linkedinUrlFor = (p) => `https://www.linkedin.com/in/${p}`;
  const githubUrlFor = (p) => `https://github.com/${p}`;

  return (
    <>
      <Row className="mt-4 ms-9 box">
        <Col>
          <Image
            className="mt-3 mb-3 profile-picture"
            src={photoPath}
            alt={`${name}`}
          />
          <span className="d-inline-block">
            {" "}
            <BsPersonCircle /> {name}
          </span>{" "}
          <br />
          {emailAddress && (
            <span>
              <a href={"mailto:" + emailAddress}>
                <HiOutlineMail /> {emailAddress}
              </a>
            </span>
          )}
          <br />
          {githubProfileName && (
            <span>
              <BsGithub />{" "}
              <a href={githubUrlFor(githubProfileName)}> {githubProfileName}</a>
            </span>
          )}
          <br />
          {linkedinProfileName && (
            <span>
              <BsLinkedin />
              <a href={linkedinUrlFor(linkedinProfileName)}>
                {" "}
                {linkedinProfileName}
              </a>
            </span>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProfileCard;
