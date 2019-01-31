import React, { Component } from 'react';


var img1 = require("../assets/img/t1.jpg");
var img2 = require("../assets/img/t2.jpg");
var img3 = require("../assets/img/t3.jpg");


class Team extends Component {

    render() {
        return (
            <div>
                <br/><br/><br/>
                <section id="TEAM" className="pb-150">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">

                                    {/*<p className="text-uppercase">Creative People</p>*/}
                                    <h2 className="h1">Team Lazycoders</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img1+")"}}>
                                    <div className="overlay overlay-member d-flex flex-column justify-content-end align-items-center">
                                            <div className="line"></div>
                                            <div className="social d-flex align-items-center justify-content-center">
                                                <span class="fa-stack fa-lg">
                                                <a href="#"><i class="fa fa-circle fa-stack-2x"></i>
                                                    <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc text-center">
                                        <h5 className="text-uppercase">Dhilip Kumar R</h5>
                                        <p>Backend Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img2+")"}}>
                                        <div className="overlay overlay-member d-flex flex-column justify-content-end align-items-center">
                                            <div className="line"></div>
                                            <div className="social d-flex align-items-center justify-content-center">
                                                <span class="fa-stack fa-lg">
                                                <a href="#"><i class="fa fa-circle fa-stack-2x"></i>
                                                    <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc text-center">
                                        <h5 className="text-uppercase">Balaji D R</h5>
                                        <p>Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img3+")"}}>
                                    <div className="overlay overlay-member d-flex flex-column justify-content-end align-items-center">
                                            <div className="line"></div>
                                            <div className="social d-flex align-items-center justify-content-center">
                                                <span class="fa-stack fa-lg">
                                                <a href="#"><i class="fa fa-circle fa-stack-2x"></i>
                                                    <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc text-center">
                                        <h5 className="text-uppercase">Karthikeyan K</h5>
                                        <p>Backend Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ div>
        );
    }
}

export default Team;
