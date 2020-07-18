import React, { useEffect } from "react";

function Projects() {
  return (
    <>
      <div className="container">
        <div className="jumbotron intro jumbotron-fluid mt-5 justify-content-center text-white">
          <div className="container text-center">
            <h1 className="display-4">Our Work</h1>
          </div>
        </div>

        <div className="text-center pb-5 mb-5">
          <small>OUR WORK</small>
          <h3>Team Projects</h3>
        </div>

        <div className="pb-5 mb-5">
          <a href="#">
            <img src="https://uploads-ssl.webflow.com/5f0d1d4f50b496667d7bd954/5f0d1d4fa053f0f7d0f21347_portfolio%201%20-%20wide.svg" class="img-fluid" alt="Responsive image" />
          </a>
          <h4 className="text-center">
            <a href="#">Project #1</a> <br /> <small>Art direction</small>
          </h4>
        </div>

        <div className="pb-5 mb-5">
          <a href="#">
            <img src="https://uploads-ssl.webflow.com/5f0d1d4f50b496667d7bd954/5f0d1d4fa053f06b22f21348_portfolio%203%20-%20wide.svg" class="img-fluid" alt="Responsive image" />
          </a>
          <h4 className="text-center">
            <a href="#">Project #2</a> <br /> <small>Product Design</small>
          </h4>
        </div>

        <div className="pb-5 mb-5">
          <a href="#">
            <img src="https://uploads-ssl.webflow.com/5f0d1d4f50b496667d7bd954/5f0d1d4fa053f0fa88f21342_portfolio%202%20-%20wide.svg" class="img-fluid" alt="Responsive image" />
          </a>
          <h4 className="text-center">
            <a href="#">Project #3</a> <br /> <small>Animation</small>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Projects;
