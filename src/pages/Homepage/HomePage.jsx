import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './light.css'
import "./HomePage.css";
import StephProfile from "../../components/StephsProfile/StephsProfile";
import StephsCV from "../../components/StephsCV/StephsCV";

const HomePage = () => {
  return (
    <Container id="home-page" fluid>
      <Row>
        <Col md={{ span: 2 }} sm={{ span: 4 }} className="ms-4">
          <StephProfile />
        </Col>
        <Col md={{ span: 6, offset: 1 }} sm={{ span: 6 }}>
          <StephsCV />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
