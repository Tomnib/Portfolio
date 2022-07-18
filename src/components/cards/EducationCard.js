import React from "react";
import Card from "react-bootstrap/Card";
import bridge from "../../assets/images/bridge.jpg";

const EducationCard = () => {
  return (
    <Card className="education-card ">
      <Card.Img variant="top" src={bridge} />
      <Card.Body>
        <Card.Title classname="card-title">University of Memphis</Card.Title>
        <Card.Text classname="card-text">
          Aug. 2018 - May. 2022
          <br />
          Major in Computer Science
          <br />
          3.3 GPA
          <br />
          Graduated Cum Laude
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default EducationCard;
