import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomePage.css";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <div id="home-page">
      <Container fluid>
        <Row>
          <Col lg={{ span: 2 }} md={{ span: 4 }} className="ms-4">
            <ProfileMenu />
          </Col>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
