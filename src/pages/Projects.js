import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/cards/ProjectCard";
import Powervirtual from "../assets/images/Powervirtual.png";
import FFXIVarm from "../assets/images/FFXIVarm.png";
import Portfolio from "../assets/images/Portfolio.png";
import Tomlist from "../assets/images/Tom-list.png";

export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="title">Projects</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Tomlist}
              title="Tom the Tiger's List"
              description="Worked with a Team to develop a website to facilitate trading and selling of cars, car parts, and car services.
              	Allows a user to create an account and view a variety of information under their profile.
                This site allows for buying and selling of items with options to save and card information.
                I personally was responsible for creating the homepage and implementing a search function that allows users to find other profiles and specific parts or services. 
"
              ghLink="https://github.com/Tomnib/Tom-the-Tigers-List"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={FFXIVarm}
              title="Final Fantasy XIV Online - Job Prediction"
              description="I created a machine learning model that can predict what job class a particular weapon (or 'arm') belongs to based on provided stats.
                This project utilizes Python and related libraries (Pandas, Matplotlib, Sklearn, and Joblib) to create and train a neural network that was able to 
                predict the job class a particular weapon belonged to with a 90% accuracy.
                This model uses a type of supervised learning algorithm called Decision Tree to give the model specific stat values to train with. 
"
              ghLink="https://github.com/Tomnib/Final-Fantasy-XIV-online-job-prediction"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Powervirtual}
              title="AutoZone Chatbot"
              description="Worked with a team to develop a chatbot within AutoZone’s Microsoft Teams environment that assists AutoZone employees in their search for frequently asked IT questions to resolve users' issues.
                The Team utilized the Agile sprint methodology to divide the development process into sprints.
                We also worked closely with project sponsors to ensure that proper product specifications are met, and that the user experience would as optimal as possible for this particular company.
                I was one of the head developers on the team and was responsible for the bot’s conversation patterns and AI training. 
"
              ghLink="https://github.com/Tomnib/AutoZone-Chatbot"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="My Portfolio"
              description=" I created this entire website portfolio as a way to practice react and web application building."
              ghLink="https://github.com/Tomnib/Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
