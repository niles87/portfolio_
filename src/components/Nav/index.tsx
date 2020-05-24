import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = (): JSX.Element => {
  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <h3>Niles </h3>
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
      </div>
    </Fragment>
  );
};

export default Nav;
