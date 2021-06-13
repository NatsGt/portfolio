import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import data from "../cv/Cv";
import { TitleSection } from "./Titles";

library.add(fab);

function Skills() {
  return (
    <Jumbotron id="skills" fluid className="section-container primary-color-section d-flex flex-column justify-content-center">
      <Container className="main-container d-flex flex-column justify-content-center">
        <TitleSection title="Skills" classElement="section-title" />
        <p className="skills-text">
          {data.skillsDescription}
        </p>
        <div className="skills-list-container">
          <ListGroup variant="flush" className="skills-list">
            {data.skills.slice(0, 4).map((skill) => {
              return (
                <ListGroup.Item className="skills-item">
                  <FontAwesomeIcon icon={skill.icon} /> {skill.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <ListGroup>
            {data.skills.slice(4, 8).map((skill) => {
              console.log({ skill });
              return (
                <ListGroup.Item className="skills-item">
                  <FontAwesomeIcon icon={skill.icon} /> {skill.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
