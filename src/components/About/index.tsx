import React, { Fragment, useRef } from "react";
import Root from "../../root/root";

const About = (): JSX.Element => {
  const canvasRef = useRef(null);
  let canvas;
  let ctx: any;
  const edge: number = 80;
  const mouse: any = {
    x: null,
    y: null,
  };

  const branchOut = () => {
    const centerX = mouse.x;
    const centerY = mouse.y;
    let color = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},0.2)`;
    for (let i = 0; i < 3; i++) {
      const root = new Root(mouse.x, mouse.y, color, centerX, centerY, edge, ctx);
      root.update();
    }
  };
  const draw = (e: any) => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    mouse.x = e.clientX - 75;
    mouse.y = e.clientY;
    ctx.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
    branchOut();
  };

  return (
    <Fragment>
      <div className="about">
        <canvas
          ref={canvasRef}
          width={window.innerWidth - 75}
          height={window.innerHeight}
          onMouseMove={draw}
        />
        <div className="content">
          <h2>About Me</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;I'm a Full-Stack Developer but back-end developement is where I
            excel. Take a look at a few of the projects I have on this page and on my{" "}
            <a href="https://github.com/niles87" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
          <p>
            Playing guitar, cooking, and archery are few things I enjoy outside of writing code.
          </p>
          <p>Also have some fun outside of this text box drag the mouse around see what happens!</p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
