import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import data from "../cv/Cv"
import { TitleSection } from "./Titles"

library.add(fab)

function Skills() {
  return (
    <Jumbotron
      id='skills'
      fluid
      className='section-container primary-color-section d-flex flex-column justify-content-center'
    >
      <Container className='main-container d-flex flex-column justify-content-center'>
        <TitleSection title='Skills' classElement='section-title' />
        <p className='skills-text'>{data.skillsDescription}</p>
        <div className='d-flex justify-content-center mt-5'>
          <Row xs={2} className='mx-5'>
            {data.skills.map((skill) => {
              return (
                <Col key={skill.id} lg='4' className='one-skill-item'>
                  <FontAwesomeIcon icon={skill.icon} />{" "}
                  <span>{skill.name}</span>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    </Jumbotron>
  )
}

export default Skills
