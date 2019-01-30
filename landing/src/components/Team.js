import React, { Component } from 'react';


var img1 = require("../assets/img/t4.jpg");
var img2 = require("../assets/img/t4.jpg");
var img3 = require("../assets/img/t4.jpg");


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
                                    <h2 className="h1">Team work builds Trust and <br/> Trust builds Growth</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img1+")"}}>
                                        
                                    </div>
                                    <div className="desc text-center">
                                        <h5 className="text-uppercase">Balaji D R</h5>
                                        <p>App Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img1+")"}}>
                                        
                                    </div>
                                    <div className="desc text-center">
                                        <h5 className="text-uppercase">Dhilip Kumar R</h5>
                                        <p>Backend Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-member">
                                    <div className="thumb relative" style={{backgroundImage: "url("+img1+")"}}>
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
