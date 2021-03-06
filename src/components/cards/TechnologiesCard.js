import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaReact, FaNodeJs, FaGitAlt, FaAngular } from "react-icons/fa";
import {
  SiRubyonrails,
  SiMysql,
  SiPostgresql,
  SiDotnet,
  SiJupyter,
} from "react-icons/si";

const TechnologiesCard = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <p class="tech-name">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
        <p class="tech-name">Ruby on Rails</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p class="tech-name">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p class="tech-name">PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
        <p class="tech-name">NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
        <p class="tech-name">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <p class="tech-name">.NET</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p class="tech-name">Jupyter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular />
        <p class="tech-name">Angular</p>
      </Col>
    </Row>
  );
};

export default TechnologiesCard;
