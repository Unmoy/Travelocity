import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#914E75" }} expand="lg">
        <Navbar.Brand
          style={{
            marginLeft: "10%",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#2243B6",
          }}
          to="/home"
        >
          Travelocity
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "60%" }} className="mr-auto">
            <Nav.Link style={{ color: "#00468C" }} href="/home">
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: "#00468C", marginLeft: "15px" }}
              href="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              style={{ color: "#00468C", marginLeft: "15px" }}
              href="/destination"
            >
              Destination
            </Nav.Link>
            <Link to="/login">
              <button className="log-btn">Login </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
