import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = (): JSX.Element => {
  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <h3>Niles</h3>
          </Link>
        </div>
        <div className="links">
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          {/* <div >
              <Link to="/about">About</Link>
            </div> */}
        </div>
        <div className="icons">
          <button onClick={() => window.open("https://github.com/niles87", "_blank")}>
            <i className="fab fa-github"></i>
          </button>
          <button onClick={() => window.open("mailto:nbing19@gmail.com", "_blank")}>
            <i className="far fa-paper-plane"></i>
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/niles-bingham/", "_blank")}
          >
            <i className="fab fa-linkedin-in"></i>
          </button>
          <a href="Niles_Bingham_resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
