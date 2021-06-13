import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "./Cards";
import data from "../cv/Cv";
import { TitleSection } from "./Titles";

function ProjectsCards(props) {
  return (
    props.content.map(project => {
      return (
        <Card key={project.id} title={project.title} img={project.img} description={project.description} preview={project.preview} code={project.code} link={project.code} />
      )
    })
  )
}

function Projects() {
  return (
    <Jumbotron id="projects" fluid className="section-container secondary-color-section d-flex flex-column justify-content-center">
      <Container className="main-container d-flex flex-column justify-content-center" >
        <TitleSection title="Projects" classElement="section-title" />
        <CardDeck className="projects-card-container">
          <ProjectsCards content={data.projects} />
        </CardDeck>
      </Container>
    </Jumbotron>
  );
}

export default Projects;
