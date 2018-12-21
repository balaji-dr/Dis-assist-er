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
                                    <p className="text-uppercase">Latest From Blog</p>
                                    <h2 className="h1">Publish what you want to <br/> not requires social</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish">
                                    <img src={require("../assets/img/p1.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                            <div className="mb-15 d-flex">
                                                <a href="#">25 October, 2017</a>
                                                <span className="line">|</span>
                                                <a href="#">By Mark Wiens</a>
                                            </div>
                                            <h6 className="text-uppercase"><a href="#">Addiction When Gambling Becomes A Problem</a></h6>
                                        </div>
                                        <p className="mb-30">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their </p>
                                        <a href="#" className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><span className="lnr lnr-arrow-right"></span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish">
                                    <img src={require("../assets/img/p2.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                            <div className="mb-15 d-flex">
                                                <a href="#">25 October, 2017</a>
                                                <span className="line">|</span>
                                                <a href="#">By Mark Wiens</a>
                                            </div>
                                            <h6 className="text-uppercase"><a href="#">Computer Hardware Desktops And Notebooks </a></h6>
                                        </div>
                                        <p className="mb-30">Ah, the technical interview. Nothing like it. Not only does it cause anxiety, but it causes anxiety for several different reasons. </p>
                                        <a href="#" className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><span className="lnr lnr-arrow-right"></span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish">
                                    <img src={require("../assets/img/p3.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                            <div className="mb-15 d-flex">
                                                <a href="#">25 October, 2017</a>
                                                <span className="line">|</span>
                                                <a href="#">By Mark Wiens</a>
                                            </div>
                                            <h6 className="text-uppercase"><a href="#">Make Myspace Your Best Designed Space</a></h6>
                                        </div>
                                        <p className="mb-30">Plantronics with its GN Netcom wireless headset creates the next generation of wireless headset and other products such as wireless </p>
                                        <a href="#" className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><span className="lnr lnr-arrow-right"></span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-publish">
                                    <img src={require("../assets/img/p4.jpg")} className="img-fluid" alt="" />
                                        <div className="top">
                                            <div className="mb-15 d-flex">
                                                <a href="#">25 October, 2017</a>
                                                <span className="line">|</span>
                                                <a href="#">By Mark Wiens</a>
                                            </div>
                                            <h6 className="text-uppercase"><a href="#">Video Games Playing With Imagination</a></h6>
                                        </div>
                                        <p className="mb-30">About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about.   11% of all adult internet </p>
                                        <a href="#" className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><span className="lnr lnr-arrow-right"></span></a>
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
