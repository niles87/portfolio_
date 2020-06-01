import React, { Fragment } from "react";
import background from "../../images/home_background.jpg";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="frame">
          <h1 className="name">Niles Bingham</h1>
          <a
            href="https://www.pexels.com/photo/grayscale-photography-of-high-rise-building-1574851/"
            className="background_img"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={background} alt="by Craig Adderley from Pexels" />
          </a>
        </div>
        <div className="dev">
          <h2 className="dev_1">Full-Stack</h2> <h2 className="dev_2">Developer</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
