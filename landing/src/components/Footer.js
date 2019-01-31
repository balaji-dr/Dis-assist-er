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
                                    <h6 className="text-white text-uppercase mb-20">About</h6>
                                    <p> This application was developed as a part for Microsoft CodeFunDo++ 2018.<br/>Team LazyCoders. <br/> College Of Engineering Guindy. </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">Navigation Links</h6>
                                    <div className="d-flex">
                                        <ul className="footer-nav">
                                            <li><a href="#HOME">Home</a></li>
                                            <li><a href="#FEATURES">Features</a></li>
                                            <li><a href="#AZURE">Azure Services</a></li>
                                        </ul>
                                        <ul className="ml-30 footer-nav">
                                            <li><a href="#TEAM">Team</a></li>
                                            <li><a href="/login">Admin Login</a></li>
                                            <li><a href="/login">Funds</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">Contact</h6>
                                    <p>For queries email at <a href="mailto:disassister@gmail.com">disassister@gmail.com</a></p>
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
                            <p className="footer-text m-0">Copyright &copy; 2018  |  All rights reserved to <a href="#">Dis-assist-er inc.</a> Designed by <a href="https://colorlib.com/wp">Colorlib</a>.</p>
                            <div className="footer-social d-flex align-items-center">

                            </div>
                        </div>
                    </div>
                </footer>
            </ div>
        );
    }
}

export default Footer;
