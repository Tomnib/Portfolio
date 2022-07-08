import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows } from "react-icons/fa";
import {
  SiMicrosoftoffice,
  SiMicrosoftteams,
  SiUbuntu,
  SiPowershell,
  SiGitkraken,
  SiJira,
} from "react-icons/si";

const ToolsCard = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <FaWindows />
        <p class="tech-name">Windows</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMicrosoftoffice />
        <p class="tech-name">MicrosoftOffice</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMicrosoftteams />
        <p class="tech-name">Teams</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiUbuntu />
        <p class="tech-name">Ubuntu</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPowershell />
        <p class="tech-name">Powershell</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiGitkraken />
        <p class="tech-name">GitKraken</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiJira />
        <p class="tech-name">Jira</p>
      </Col>
    </Row>
  );
};

export default ToolsCard;
