import React from "react";
import "./home.css";
import logo from "../../assets/Task-bro.png";
function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-side">
            <div>
              {/* <span className="sub-title">Welcome To My Portofolio</span> */}
              <h2 className="title">Hi ! I'm Muhamed Mustafa Web Developer</h2>
              <p className="text-mutes">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur esse culpa soluta veritatis animi perferendis, unde
                veniam laboriosam ipsa alias! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Officiis quo asperiores aut veniam
                harum maiores quaerat illo dicta qui. Aperiam?
              </p>
              <h4>Let's Connect <span><i className="fa-solid fa-circle-right"></i></span></h4>
            </div>
          </div>
          <div className="col-md-6 right-side">
            <img width="100%" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
