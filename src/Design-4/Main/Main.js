import React from "react";
import "./Main.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Main = () => {
  Aos.init();
  return (
    <div className="container">
      <div className="row">
        <div
          className="home"
          style={{
            backgroundImage: "url(/img/school.jpg)",
          }}
        ></div>
      </div>
      <div className="row">
        <div className="col-md-12 col-11">
          <div className="heading">
            <h1>Admission Open</h1>
            <button className="btn ">Admission</button>
          </div>
          {/* Welcome Section Start */}
          <div data-aos="fade-up" className="row">
            <div className="col-md-10 col-10 mx-auto">
              <div className="box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="welcome-text">
                      <h1>Welcome to Our Education  Center</h1>
                      <p>
                        Lorem ipsum, dolor sit architecto laboriosam dolor sit
                        architecto laboriosam saepe aliquid nostrum?
                      </p>
                      <p>
                        Lorem ipsum, dolor sit architecto laboriosam saepe
                        aliquid nostrum?
                      </p>
                      <div className="verticalLine">

                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="welcome-text">
                      <div className="row">
                        <div className="col-2">
                          <div className="key">
                            <i className="fa fa-2x fa-book"></i>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="key">
                            <h4>Best Books</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">
                          <div className="key">
                            <i className="fa fa-2x fa-book"></i>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="key">
                            <h4>Best Books</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">
                          <div className="key">
                            <i className="fa fa-2x fa-book"></i>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="key">
                            <h4>Best Books</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* Wecome Section End */}
           {/* Welcome Section Start */} 
          <div data-aos="fade-left" className="row">
            <div className="col-md-10 col-10 mx-auto">
              <div className="teacher">
                <div className="teacher-heading">
                  <h3>Our Teachers</h3>
                </div>
                  <div className="teacher-card">
                  <div className="teacher-info">
                  <div className="teacher-pic">
                    <img src="/img/profile.jpg" className = "img-responsive" alt="teacher"/>
                  </div>
                  <div className="teacher-detail">
                    <h5>Peter Sharma</h5>
                    <p> Phd. English </p>
                  </div>
                  </div>
                  <div className="teacher-info">
                  <div className="teacher-pic">
                    <img src="/img/profile.jpg" className = "img-responsive" alt="teacher"/>
                  </div>
                  <div className="teacher-detail">
                    <h5>Peter Sharma</h5>
                    <p> Phd. English </p>
                  </div>
                  </div>
                  <div className="teacher-info">
                  <div className="teacher-pic">
                    <img src="/img/profile.jpg" className = "img-responsive" alt="teacher"/>
                  </div>
                  <div className="teacher-detail">
                    <h5>Peter Sharma</h5>
                    <p> Phd. English </p>
                  </div>
                  </div>
                  <div className="teacher-info">
                  <div className="teacher-pic">
                    <img src="/img/profile.jpg" className = "img-responsive" alt="teacher"/>
                  </div>
                  <div className="teacher-detail">
                    <h5>Peter Sharma</h5>
                    <p> Phd. English </p>
                  </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
          {/* Wecome Section End */}
           {/* Welcome Section Start */} 
          <div data-aos="fade-right" className="row">
          <div className="col-md-4 col-6">
                  <div className="ads-card">
                    <img src="/img/team.jpg" alt="" className="img-responsive" />
                    <div className="ads-card-body">
                      <div className="ads-heading">
                        <p>Vim probo malorum</p>
                      </div>
                      <div className="desc">
                        <p> lorem ismp established</p>
                        <h5> Lorem is erbd </h5>
                        <a> Lorem </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="ads-card">
                    <img src="/img/team1.jpg" alt="" className="img-responsive" />
                    <div className="ads-card-body">
                      <div className="ads-heading">
                        <p>Vim probo malorum</p>
                      </div>
                      <div className="desc">
                        <p> lorem ismp established</p>
                        <h5> Lorem is erbd </h5>
                        <a> Lorem </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="ads-card">
                    <img src="/img/team.jpg" alt="" className="img-responsive" />
                    <div className="ads-card-body">
                      <div className="ads-heading">
                        <p>Vim probo malorum</p>
                      </div>
                      <div className="desc">
                        <p> lorem ismp established</p>
                        <h5> Lorem is erbd </h5>
                        <a> Lorem </a>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          {/* Wecome Section End */}
           {/* Welcome Section Start */} 
          <div className="row">
          <div className="col-md-12 col-12">
          <div  data-aos="fade-up-left" className="area" 
              >
              <div className="area-container" style = {{ backgroundImage:"url(/img/IT.jpg)" }}>
              </div>
                <div className="area-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos, architecto blanditiis magnam sequi atque odio molestias cumque totam mollitia et pariatur dignissimos unde dolorem reiciendis quo possimus. Cupiditate, eaque.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Wecome Section End */}
           {/* Welcome Section Start */} 
          <div className="row">
          <div className="col-md-12 col-12">
              <div  data-aos="fade-up-right" className="info" style = {{ backgroundImage:"url(/img/pencils.jpg)" }}
              >
                <div className="Accdemic-info">
                  <div className="redord">
                    <p>100+</p>
                    <p>Seats</p>
                  </div>
                </div>
                <div className="Accdemic-info">
                  <div className="redord">
                    <p>100+</p>
                    <p>Seats</p>
                  </div>
                </div>
                <div className="Accdemic-info">
                  <div className="redord">
                    <p>100+</p>
                    <p>Seats</p>
                  </div>
                </div>
                <div className="Accdemic-info">
                  <div className="redord">
                    <p>100+</p>
                    <p>Seats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Wecome Section End */}
           {/* Welcome Section Start */} 
          <div data-aos="fade-down" className="row">
          <div className="col-md-12 col-12">
              <div className="footer">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <h1>LOGO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iste exercitationem ratione nam, aperiam illo blanditiis voluptatem animi rerum quidem atque architecto at aut, ipsa laboriosam voluptates, unde fugit eum!</p>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="row">
                      <div className="col-6">
                        <ul>
                        <h6>About</h6>
                          <li><a href="">Lorem, ipsum.</a></li>
                          <li><a href="">Lorem, ipsum.</a></li>
                          <li><a href="">Lorem, ipsum.</a></li>
                          <li><a href="">Lorem, ipsum.</a></li>
                          
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                      <h6>Contact</h6>
                          <li><a href="">Lorem, ipsum.</a></li>
                          <li><a href="">Lorem, ipsum.</a></li>
                          <li><a href="">Lorem, ipsum.</a></li>
                          <li><a href="">Lorem, ipsum.</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* Wecome Section End */}
          <div className="upper" style = {{
          width:'100%',
          height:'20px',
          backgroundColor:'#fa1a43'
        }}></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
