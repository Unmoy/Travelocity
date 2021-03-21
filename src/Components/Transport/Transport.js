import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Transport = (props) => {
  const { url, name, id } = props.vehicle;
  return (
    <div>
      <Link to={"/destination/" + name}>
        <Card style={{ width: "18rem", marginTop: "50%" }}>
          <Card.Body>
            <img style={{ width: "50%" }} src={url} alt="" />
            <Card.Title style={{ marginTop: "20px" }}>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Transport;
