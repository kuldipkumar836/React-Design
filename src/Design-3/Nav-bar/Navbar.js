import React from "react";
import "./Nav-bar.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12  col-12">
          <div className="header">
            <div className="col-md-6 col-11">
              <div className="sub">
                <div className="header-content">
                  <h1>We Understand the value of you price-less time  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vehicula scelerisque mattis. Nullam nec Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Nunc vehicula
                    scelerisque mattis. Nullam nec{" "}
                  </p>
                  <div className="form">
                    <form>
                      <input type="text" placeholder=" Type ..." />
                      <input type="submit" value="Subscribe" />
                    </form>
                  </div>
                  <div className="btns">
                    <button className="btn">
                      <i class="fa fa-apple" aria-hidden="true"></i> Download
                      Now
                    </button>
                    <button className="btn">
                      <i class="fa fa-android" aria-hidden="true"></i>Download
                      Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-11">
              <div className="sub">
                <div className="ui">
                  <img src="/img/uibg.png" className="img-responsive" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
