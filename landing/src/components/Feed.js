import React, { Component } from 'react';




class Feed extends Component {
    render() {
        return (
            <div>
                <section id="blog" className="section-full">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">
                                    <p className="text-uppercase">Screenshots</p>
                                    <h2 className="h1">A gist of our product</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish text-center">
                                    <img src={require("../assets/img/p1.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                            <h4 className="text-uppercase">Help Feed</h4>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish text-center">
                                    <img src={require("../assets/img/p3.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                        <h4 className="text-uppercase">Maps</h4>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish text-center">
                                    <img src={require("../assets/img/p6.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                        <h4 className="text-uppercase">Notifications</h4>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish text-center">
                                    <img src={require("../assets/img/p5.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                        <h4 className="text-uppercase">Alerts</h4>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish text-center">
                                    <img src={require("../assets/img/p4.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                        <h4 className="text-uppercase">ChatBot</h4>
                                        </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish text-center">
                                    <img src={require("../assets/img/p2.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                            <h4 className="text-uppercase">Funds</h4>
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

export default Feed;
