import React, { Component } from 'react';


var img1 = require("../assets/img/t4.jpg");
var img2 = require("../assets/img/t4.jpg");
var img3 = require("../assets/img/t4.jpg");


class Team extends Component {

    render() {
        return (
            <div>
                <br/><br/><br/>
                <section id="team" className="pb-150">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">

                                    {/*<p className="text-uppercase">Creative People</p>*/}
                                    <h2 className="h1">Team work builds trust and <br/> trust builds growth</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img1+")"}}>
                                        <div className="overlay overlay-member d-flex flex-column justify-content-end align-items-center">
                                            <p className="text-white">This article is floated online with an aim to help you find the best dvd printing solution. Dvd</p>
                                            <div className="line"></div>
                                            <div className="social d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc text-center">
                                        <h5 className="text-uppercase"><a href="#">Rodney Cooper</a></h5>
                                        <p>Creative Art Director</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img1+")"}}>
                                        <div className="overlay overlay-member d-flex flex-column justify-content-end align-items-center">
                                            <p className="text-white">This article is floated online with an aim to help you find the best dvd printing solution. Dvd</p>
                                            <div className="line"></div>
                                            <div className="social d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc text-center">
                                        <h5 className="text-uppercase"><a href="#">Dora Walker</a></h5>
                                        <p>Senior Core Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img1+")"}}>
                                        {/*<img src={require("../assets/img/t4.jpg")} alt="" />*/}
                                        <div className="overlay overlay-member d-flex flex-column justify-content-end align-items-center">
                                            <p className="text-white">This article is floated online with an aim to help you find the best dvd printing solution. Dvd</p>
                                            <div className="line"></div>
                                            <div className="social d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desc text-center">
                                        <h5 className="text-uppercase"><a href="#">Lena Keller</a></h5>
                                        <p>Creative Content Developer</p>
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
