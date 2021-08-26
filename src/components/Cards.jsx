import React from "react";
import Card from "react-bootstrap/Card";


function Cards(props) {
  return (
    <Card className="project-card my-lg-3" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.img}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="card-text-description" >{props.description}</Card.Text>
        <Card.Link target="_blank" href={props.preview}>Preview project</Card.Link>
        <Card.Link href={props.code}>Source Code</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
