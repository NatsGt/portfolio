import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { TitleSection } from "./Titles";
import data from "../cv/Cv"

function About() {
  return (
    <Jumbotron fluid id="about" className="secondary-color-section about-container d-flex flex-column justify-content-center">
      <Container>
        <TitleSection title="About" classElement="section-title" />
        <p>
          {data.aboutMe}
        </p>
      </Container>
    </Jumbotron>
  );
}

export default About;
