import React from "react";
import Card from "react-bootstrap/Card";


function Cards(props) {
  return (
    <a
      className="project-link"
      target="_blank"
      rel="noopener noreferrer"
      href={props.preview}
    >
      <Card className="project-card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.img}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="card-text-description" >{props.description}</Card.Text>
          <Card.Link href={props.preview}>Preview</Card.Link>
          <Card.Link href={props.code}>Source Code</Card.Link>
        </Card.Body>
      </Card>
    </a>

  );
}

export default Cards;
