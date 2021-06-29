import React, { useContext } from "react";
import "./HeaderInner.css";
import logo2 from "../../img/logo2.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const HeaderInner = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light main-menu-inner">
      <div className="container">
        <a className="navbar-brand" href="#navbar">
          <div className="logo-img">
            <img src={logo2} alt="" />
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
                <span className="nav-link" style={{ fontWeight: "800" }}>
                  {loggedInUser.name}
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  LogIn
                </Link>
              </li>
            )}
            {loggedInUser.email && (
              <li className="nav-item" onClick={() => setLoggedInUser({})}>
                <Link className="text-decoration-none" to="/login">
                  <span className="nav-link " style={{ cursor: "pointer" }}>
                    LogOut
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderInner;
