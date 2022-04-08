import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './light.css'
import "./HomePage.css";
import StephProfile from "../../components/StephsProfile/StephsProfile";
import StephsCV from "../../components/StephsCV/StephsCV";

const HomePage = () => {
  return (
    <div id="home-page">
      <Container fluid>
        <Row>
          <Col lg={{ span: 2 }} md={{ span: 4 }} className="ms-4">
            <StephProfile />
          </Col>
          <Col lg={{ span:6, offset: 1}}>
            <StephsCV />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
