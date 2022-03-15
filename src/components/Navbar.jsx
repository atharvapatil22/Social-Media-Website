import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")) === true);
  }, [localStorage.getItem("loggedIn")]);

  return (
    <header id="navbar">
      <nav className="navbar-container container">
        <Link to={"/"}>
          <div className="home-link">
            <div className="navbar-logo"></div>
            Website Name
          </div>
        </Link>
        <div id="navbar-menu" aria-labelledby="navbar-toggle">
          <ul className="navbar-links">
            <li className="navbar-item">
              <Link className="navbar-link" to={"/"}>
                Home
              </Link>
            </li>
            {!loggedIn ? (
              <>
                <li className="navbar-item">
                  <Link className="navbar-link" to={"/register"}>
                    Register
                  </Link>
                </li>

                <li className="navbar-item">
                  <Link className="navbar-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="navbar-item">
                  <Link className="navbar-link" to={"/profile"}>
                    Profile
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
