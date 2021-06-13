import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../cv/Cv";
import { TitleSection } from "./Titles";

function ContactIcon(props) {
  const [contact, setContact] = useState(true);
  function handleHover() {
    setContact(false);
  }
  function handleOut() {
    setContact(true);
  }
  return (
    <div
      onMouseOver={handleHover}
      onMouseLeave={handleOut}
      className="main-contact-container"
    >
      <a
        href={props.name}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <FontAwesomeIcon className="social-icon" icon={props.icon} />
      </a>
      <span className={contact ? "hide" : "show"}>
        {props.description}
      </span>
    </div>
  )
}

function Contact() {
  return (
    <Jumbotron id="contact" fluid className="section-container primary-color-section d-flex flex-column justify-content-center my-0">
      <Container className="main-container d-flex flex-column justify-content-center" >
        <TitleSection title="Contact" classElement="section-title" />
        <Row>
          <Col md={4}>
            <Image
              className="contact-img"
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              rounded
            />
          </Col>
          <Col>
            <p>{data.contactSummary}</p>
            <div className="contact-section">
              {data.contact.map((data) => {
                return (
                  <ContactIcon key={data.id} name={data.value} icon={data.icon} description={data.description} />
                );
              })}
            </div>

          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Contact;

//https://stackoverflow.com/questions/61562660/react-hooks-hover-effect
