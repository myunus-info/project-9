import React, { useContext } from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light main-menu">
        <div className="container">
          <a className="navbar-brand" href="/home">
            <div className="logo-img">
              <img src={logo} alt="" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>

              {loggedInUser.email ? (
                <li className="nav-item">
                  <span className="nav-link">{loggedInUser.name}</span>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/booking">
                    LogIn
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
