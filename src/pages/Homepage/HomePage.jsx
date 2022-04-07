import React from "react";
import "./HomePage.css";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div id="home-page">
      <Container fluid>
        <Row>
          <Col lg={{ span: 2 }} md={{ span: 4 }} className="ms-4">
            <ProfileMenu />
          </Col>
          <Col>
            <div className="fill"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
