import React, { useEffect } from "react";

function HomePage() {
  return (
    <>
      <div className="container">
        <div className="jumbotron intro jumbotron-fluid mt-5 justify-content-center text-white">
          <div className="container text-center mx-auto w-75">
            <h1 className="display-4">Pjaycorp</h1>
            <p className="lead ">building amazing applications as a startup</p>

            <h3 className="btn btn-dark btn-lg text-center">SEE PROJECTS</h3>
          </div>
        </div>
        <div className="text-center">
          <h6>
            <small> What we believe in</small>
          </h6>
          <h3>Put customers first at all times.</h3>
        </div>{" "}
        <hr className="mx-4" />
        <div className="p-5" id="about">
          <div className="row">
            <div className=" text-center mt-5 pt-5 col-12 col-md-4">
              <h6>
                <small> About</small>
              </h6>
              <h3>Who we are</h3>
              <p>We are a open source company and startup.</p>
              <h3 className="btn btn-dark btn-lg text-center">SEE PROJECTS</h3>
            </div>

            <div className="col-12 col-md-8 ">
              <img src="https://uploads-ssl.webflow.com/5f0d1d4f50b496667d7bd954/5f0d1d4fa053f0cf1df2133b_placeholder%203.svg" class="img-fluid" alt="Responsive image" />
            </div>
          </div>
        </div>
        <div className="p-5" id="team">
          <div className="row">
            <div className="col-12 col-md-8 ">
              <img src="https://uploads-ssl.webflow.com/5f0d1d4f50b496667d7bd954/5f0d1d4fa053f03103f2133c_placeholder%201.svg" class="img-fluid" alt="Responsive image" />
            </div>
            <div className="text-center mt-5 pt-5 col-12 col-md-4">
              <h6>
                <small> TEAM</small>
              </h6>
              <h3> What we do</h3>
              <p>We build amazing application.</p>
              <h3 className="btn btn-dark btn-lg text-center">SEE PROJECTS</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
