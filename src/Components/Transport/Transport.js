import React from "react";
import { Card } from "react-bootstrap";
const Transport = (props) => {
  const { url, name } = props.vehicle;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <img style={{ width: "50%" }} src={url} alt="" />
          <Card.Title style={{ marginTop: "20px" }}>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Transport;
