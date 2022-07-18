import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import stairs from "../assets/images/stairs.png";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Home = () => {
  return (
    <Container className="home-section">
      <Row>
        <Col md={8} className="center-text">
          <h1 style={{ fontSize: "2.6em" }}>Hi, I'm Thomas Shelton</h1>
          <h2>Software Developer</h2>
          <p>
            <br />
            Welcome to my portfolio page everyone!
            <br />
            <br />
            I am a recent computer science graduate.
            <br />
            <br />I spent my academic years cultivating my technical skills and
            while those are certainly important, I <b>firmly</b> believe that{" "}
            <b>team collaboration</b> and <b>communication</b> are just as
            significant. As such, I have spent a majority of my life developing
            those skills to be a great team member, employee, and all around
            great person.
            <br />
            <br />
          </p>

          <Col md={12} className="home-social">
            <h2>MY SOCIALS</h2>
            <ul className="home-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Tomnib"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tomnib/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto: thomasearl09@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Col>
        <Col md={4} className="homePic">
          <img src={stairs} className="img-fluid" alt="homePic" />
        </Col>
      </Row>
    </Container>
  );
};
