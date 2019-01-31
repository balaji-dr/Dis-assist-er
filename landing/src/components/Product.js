import React, { Component } from 'react';




class Product extends Component {
    render() {
        return (
            <div>
                <section id="FEATURES" className="title-bg section-full">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">
                                    <p className="text-white text-uppercase">FEATURES</p>
                                    <h2 className="text-white h1">We provide real-time Assistance</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-list"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Help Feed</h4>
                                        <p>Displays prioritized posts by the victims and volunteers</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-map-marker"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Maps</h4>
                                        <p>Shows location of all the victims and volunteers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    
                                    <div className="icon">
                                        <span className="lnr lnr-bubble"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Notifications</h4>
                                        <p>Sends notifications when there is a help nearby</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    
                                    <div className="icon">
                                        <span className="lnr lnr-warning"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Alerts</h4>
                                        <p>Displays news, weather and disaster alerts</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-envelope"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>ChatBot</h4>
                                        <p>What to do and what not to do before/during/after disasters</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-gift"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Funds</h4>
                                        <p>Helps users connect with official Fund portal</p>
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

export default Product;
