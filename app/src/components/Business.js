import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Business() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid justify-content-center">
        <div className="container text-center mx-auto w-75">
          <h1 className="display-4">Grow your business</h1>
          <p className="lead ">Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.</p>
          <Link to="/contact">
            <h3 className="btn btn-dark btn-lg text-center">START NOW</h3>
          </Link>{" "}
        </div>
      </div>
    </>
  );
}

export default Business;
