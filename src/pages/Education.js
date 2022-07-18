import React from "react";
import { Container } from "react-bootstrap";
import EducationCard from "../components/cards/EducationCard";
import LanguagesCard from "../components/cards/LanguagesCard";
import TechnologiesCard from "../components/cards/TechnologiesCard";
import ToolsCard from "../components/cards/ToolsCard";

export const Education = () => {
  return (
    <Container fluid className="education-section">
      <Container>
        <h1 className="title">Education</h1>
        <EducationCard />
        <br />
        <br />
        <h1 className="title">Languages</h1>
        <LanguagesCard />
        <br />
        <br />
        <h1 className="title">Technologies</h1>
        <TechnologiesCard />
        <br />
        <br />
        <h1 className="title">Tools</h1>
        <ToolsCard />
      </Container>
    </Container>
  );
};
