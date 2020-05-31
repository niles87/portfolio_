import React, { Fragment } from "react";
import projects from "../../data/projectlist.json";

const Projects = (): JSX.Element => {
  return (
    <Fragment>
      <div className="project_container">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <div className="card_title">
              <h2 className="title">{project.title}</h2>
            </div>
            <div className="card_body">
              <div
                className="card_img"
                style={{
                  background: `url(${process.env.PUBLIC_URL + project.img}) no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="card_content">
                <p>{project.description}</p>
                <span>
                  <strong>Technologies used:</strong>
                </span>
                <p>{project.technologies}</p>
              </div>
            </div>
            <div className="card_footer">
              <button onClick={() => window.open(project.github, "_blank")}>
                <i className="fab fa-github"></i>
              </button>
              <button onClick={() => window.open(project.application, "_blank")}>
                <i className="fas fa-rocket"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
