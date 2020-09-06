import React, { Fragment } from "react";

const About = (): JSX.Element => {
  return (
    <Fragment>
      <div className="about">
        <div className="content">
          <h2>About Me</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;I'm a Full-Stack Developer but back-end
            developement is where I excel. Take a look at a few of the projects
            I have on this page and on my{" "}
            <a
              href="https://github.com/niles87"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            Playing guitar, cooking, and archery are few things I enjoy outside
            of writing code.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
