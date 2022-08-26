import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="parent">
            <div className="desc">
              <h1 className="text-center">My Sklills</h1>
              <p className="text-muted text-center">
                Seeking a Web Developer position in a stable company where I can
                use my skills to benefit the company.
              </p>

              <div className="skill ">
                <div className="one">
                  <i className="fa-brands fa-html5"></i>
                  <h2>HTML 5 </h2>
                </div>
                <div className="one">
                  <i className="fa-brands fa-css3"></i>
                  <h2>CSS</h2>
                </div>
                <div className="one">
                  <i className="fa-brands fa-square-js"></i>
                  <h2>JS</h2>
                </div>
                <div className="one">
                  <i className="fa-brands fa-react"></i>
                   <h2>React JS</h2>
                </div>
                <div className="one">
                <i className="fa-brands fa-bootstrap"></i>
                  <h2>Bootstrap</h2>
                </div>
                <div className="one">
                <i className="fa-solid fa-code-merge"></i>
                  <h2>ECMASCRIPT 6</h2>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
