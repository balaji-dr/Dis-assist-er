import React, { Component } from 'react';




class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="section-full">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">About Agency</h6>
                                    <p>The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">Navigation Links</h6>
                                    <div className="d-flex">
                                        <ul className="footer-nav">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Features</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Portfolio</a></li>
                                        </ul>
                                        <ul className="ml-30 footer-nav">
                                            <li><a href="#">Team</a></li>
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">Newsletter</h6>
                                    <p>For business professionals caught between high OEM price and mediocre print and graphic output,</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">Download the Android App</h6>
                                    <ul className="instafeed d-flex flex-wrap">
                                        <a href="https://play.google.com" target="_blank">
                                        <li><img src={require("../assets/img/google-play-badge.png")} alt="" style={{width:200}}/></li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom d-flex justify-content-between align-items-center">
                            <p className="footer-text m-0">Copyright &copy; 2017  |  All rights reserved to <a href="#">Datarc inc.</a> Designed by <a href="https://colorlib.com/wp">Colorlib</a>.</p>
                            <div className="footer-social d-flex align-items-center">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </ div>
        );
    }
}

export default Footer;
