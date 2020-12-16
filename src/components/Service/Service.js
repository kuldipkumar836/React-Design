import React, { Component } from 'react';
import './Service.css'

const Service = () => {
    return (
        <div className ="container-fluid">
            <div className ="row">
                <div className ="col-md-12">
                    <div className ="custom_Service">
                        <div className ="row">
                            <div className ="service_heading">
                                <h3>Our Services</h3>
                            </div>
                        </div>
                        <div className ="row">
                            <div className ="col-md-3 col-sm-6">
                                <div className ="service-card mx-auto">
                                    <div className ="service-img">
                                        <img src="/img/e.jpg" className ="img-responsive" alt="" />
                                        <div className ="overlay">
                                            <a href={() => false} className =" btn view-btn">View</a>
                                        </div>
                                    </div>
                                    <div className ="service-text">
                                        <h3>Service Title</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quod!</p>
                                    </div>
                                </div>
                            </div>
                            <div className ="col-md-3 col-sm-6">
                            <div className ="service-card mx-auto">
                                    <div className ="service-img">
                                        <img src="/img/d.jpg" className ="img-responsive" alt="" />
                                        <div className ="overlay">
                                            <a href={() => false} className =" btn view-btn">View</a>
                                        </div>
                                    </div>
                                    <div className ="service-text">
                                        <h3>Service Title</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quod!</p>
                                    </div>
                                </div>
                            </div>
                            <div className ="col-md-3 col-sm-6">
                            <div className ="service-card mx-auto">
                                    <div className ="service-img">
                                        <img src="/img/c.jpg" className ="img-responsive" alt="" />
                                        <div className ="overlay">
                                            <a href={() => false} className =" btn view-btn">View</a>
                                        </div>
                                    </div>
                                    <div className ="service-text">
                                        <h3>Service Title</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quod!</p>
                                    </div>
                                </div>
                            </div>
                            <div className ="col-md-3 col-sm-6">
                            <div className ="service-card mx-auto">
                                    <div className ="service-img">
                                        <img src="/img/f.jpg" className ="img-responsive" alt="" />
                                        <div className ="overlay">
                                            <a href={() => false} className =" btn view-btn">View</a>
                                        </div>
                                    </div>
                                    <div className ="service-text">
                                        <h3>Service Title</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quod!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Service;