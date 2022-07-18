import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiRuby } from "react-icons/di";
import { FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";

const Languages = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <FaPython />
        <p class="tech-name">Python</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaJava />
        <p class="tech-name">Java</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
        <p class="tech-name">Javascript</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiRuby />
        <p class="tech-name">Ruby</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaHtml5 />
        <p class="tech-name">HTML</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaCss3Alt />
        <p class="tech-name">CSS</p>
      </Col>
    </Row>
  );
};

export default Languages;
