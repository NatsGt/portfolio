import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import data from "../cv/Cv";
import MainTitle, { SubTitle } from './Titles'
import IconButton from './IconButton'

function Frontpage() {
  return (
    <Jumbotron id="main" fluid className="section-container primary-color-section  d-flex flex-column justify-content-around">
      <Container className="main-container">
        <div className="main-contact-container">
          {data.contact.map((data) => (
            <IconButton key={data.id} href={data.value} icon={data.icon} />
          ))}
        </div>
        <MainTitle classElement="main-title" title="Natalia Rodas" />
        <SubTitle classElement="secondary-title" title="Front End Developer" />
        <div className="main-text">
          <p className="text-break">{data.briefDescription}</p>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Frontpage;
