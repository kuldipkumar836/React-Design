import React from 'react';
import './Footer.css'
 
const Footer = () => {
    return (
        <div className ="container-fluid">
            <div className = "row">
                <div className ="col-md-12  col-12">
                    <div className = "footer">
                        <div className ="footer-content">
                            <div className = "go-up">
                                <i className = "fa fa-2x fa-arrow-up" aria-hidden = "true"></i>
                            </div>
                            <h3> App is available for free on Google Play & App Store</h3>
                            <div className ="btns">
                                <button className = "btn"><i class="fa fa-apple" aria-hidden="true"></i> Download Now</button>
                                <button className = "btn"><i class="fa fa-android" aria-hidden="true"></i>Download Now</button>
                            </div>
                            <div className ="s-media">
                            <span><i class="fa m-2 fa-2x fa-facebook-square" aria-hidden="true"></i></span>
                            <span><i class="fa m-2  fa-2x fa-instagram" aria-hidden="true"></i></span>
                            <span><i class="fa m-2  fa-2x fa-twitter" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;