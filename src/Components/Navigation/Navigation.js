import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Navigation.css";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Travelocity
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse justify-content-end navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link className="nav-link active" to="/destination">
                Destination
              </Link>
              {!loggedIn.email && (
                <Link to="/login">
                  <button className="log-btn">Login </button>
                </Link>
              )}
              {loggedIn.email && (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  {loggedIn.displayName}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
