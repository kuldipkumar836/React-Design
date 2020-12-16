import React, { Component } from 'react';
import './Footer.css'

const footer = () => {
    return (
        <div className ="container-fluid">
    <div className ="row">
        <div className ="col-md-12">
            <div className ="custom_bottom">
                    <div className ="row">
                        <div className ="col-md-4 col-sm-4">
                            <div className ="footer_service">
                                <i className ="fa fa-2x fa-picture-o"  aria-hidden="true"></i>
                                <div ><h3  >Photo Gallery</h3></div>
                            </div>
                        </div>
                        <div className ="col-md-4 col-sm-4">
                            <div className ="footer_service">
                                <i className ="fa fa-2x fa-video-camera" aria-hidden="true"></i>
                                <h3  >Video Gallery</h3>
                            </div>
                        </div>
                        <div className ="col-md-4 col-sm-4">
                            <div className ="footer_service">
                                <i className ="fa fa-2x fa-map-marker" aria-hidden="true"></i>
                                <h3  >Site Map</h3>
                            </div>
                        </div>
                    </div>
                    <div className ="row">
                        <div className ="col-md-12">
                            <div className ="heading">
                                <h4> Important Link </h4>
                            </div>
                            <div className ="links">
                                <a href={() => false}>Lorem ipsum dolor</a>
                                <a href={() => false}>Lorem ipsum dolor</a>
                                <a href={() => false}>Lorem ipsum dolor</a>
                                <a href={() => false}>Lorem ipsum dolort</a>
                                <a href={() => false}>Lorem ipsum dolor</a>
                                <a href={() => false}>Lorem ipsum dolor</a>
                              
                            </div>
                        </div>
                    </div>
                    <div className ="copywrite">
                        © 2019 Hinjilicut Municipal Council. All Right Reserved.Developed By:
                    </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default footer;