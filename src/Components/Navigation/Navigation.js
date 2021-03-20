import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div className="navs">
        {/* <h1 style={{ marginLeft: "10px", marginTop: "15px" }}>Travelocity</h1> */}
        <Nav className="justify-content-end " activeKey="/home">
          <Nav.Item className="p-2">
            <Link to="/home">Home</Link>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Link to="/about">About</Link>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Link to="/destination">Destination</Link>
          </Nav.Item>
          <Nav.Item className="p-2">
            <Link to="/login">Login</Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Navigation;
