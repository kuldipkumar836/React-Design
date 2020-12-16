import React from "react";
import "./Ads.css";

const Ads = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <div className="main-heading">
            <h2>Take A Look To Our </h2>
            <h2>Featured Ads</h2>
          </div>
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="links">
                 <a> <span><i class="fa fa-diamond" aria-hidden="true"></i></span> Mobile </a>
                 <a> <span><i class="fa fa-diamond" aria-hidden="true"></i></span> Earphone </a>
                 <a> <span><i class="fa fa-diamond" aria-hidden="true"></i></span> Dispaly </a>
                 <a> <span><i class="fa fa-diamond" aria-hidden="true"></i></span> Power Bank </a>
                 <a> <span><i class="fa fa-diamond" aria-hidden="true"></i></span> Clothe </a>
                 <a> <span><i class="fa fa-diamond" aria-hidden="true"></i></span> Acceseris </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="row">
                <div className="col-md-4 col-6">
                  <div className="ads-card">
                    <img src="/img/g.jpg" alt="" className="img-responsive" />
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
                    <img src="/img/f.jpg" alt="" className="img-responsive" />
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
                    <img src="/img/h.jpg" alt="" className="img-responsive" />
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
                    <img src="/img/i.jpg" alt="" className="img-responsive" />
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
                    <img src="/img/c.jpg" alt="" className="img-responsive" />
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
                    <img src="/img/a.jpg" alt="" className="img-responsive" />
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-11">
            <div className="pic-left">
              <img className="img-responsive" src="/img/team.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 col-11">
            <div className="team">
              <div className="team-desc">
                <h3>We will Deliverd</h3>
                <h3>Straight To Your Enterprise</h3>
                <p>
                  Adding console on multiple areas is time consuming. To solve
                  this problem I uses Turbo console log which basically creates
                  console with shortcut and plus point here is that this
                  extension also{" "}
                </p>
                <button className="btn visit"> Visit </button>
              </div>
            </div>
          </div>
        </div>
        {/* next row */}
        <div className ="row">
            <div className ="col-md-12">
                <div className ="work">
                        <h3>find out how it work</h3>
                    <div className ="work-desc">
                        <p>Adding console on multiple areas is time consuming. To solve this problem I uses Turbo console log which basically creates console</p>
                    </div>
                </div>
                <div className ="row">
                    <div className = "col-md-4 col-12">
                            <div className = "service">
                                <img className ="img-responsive" src = "/img/a.jpg" alt ="" />
                                <p>plus point here is that this extension also</p>
                            </div>
                    </div>
                    <div className = "col-md-4 col-12">
                            <div className = "service">
                                <img className ="img-responsive" src = "/img/e.jpg" alt ="" />
                                <p>plus point here is that this extension also</p>
                            </div>
                    </div>
                    <div className = "col-md-4 col-12">
                            <div className = "service">
                                <img className ="img-responsive" src = "/img/c.jpg" alt ="" />
                                <p>plus point here is that this extension also</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-11">
            <div className="team">
              <div className="team-desc">
                <h3>We will Provide</h3>
                <h3>SUpport To You Always</h3>
                <p>
                  Adding console on multiple areas is time consuming. To solve
                  this problem I uses Turbo console log which basically creates
                  console with shortcut and plus point here is that this
                  extension also
                </p>
                <button className="btn visit"> Visit </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-11">
            <div className="pic-right">
              <img className="img-responsive" src="/img/support.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* Footer Start */}
        <div className="row">
            <div className="col-md-12 col-12">
                <div className= "footer">
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
