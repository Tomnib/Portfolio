import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <h3>
        Designed by Thomas Shelton
        <br />
        Copyright © {year} - All Rights Reserved.
      </h3>
    </Container>
  );
};

export default Footer;
