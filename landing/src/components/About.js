import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section-full gray-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="section-title text-center">
                                    <p className="text-uppercase">About Our Digital Agency</p>
                                    <h3>Plantronics with its GN Netcom <b>wireless headset</b> creates the next generation of wireless headset and other products such as wireless amplifiers, and <b>wireless headset</b> telephone.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <figure className="signle-service">
                                    <img src={require("../assets/img/s1.jpg")} className="img-fluid" alt="" />
                                        <figcaption className="text-center">
                                            <h5 className="text-uppercase">Addiction Whit Gambling</h5>
                                            <p>It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files</p>
                                            <a href="#" className="primary-btn d-inline-flex align-items-center">Explore<span className="lnr lnr-arrow-right"></span></a>
                                        </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="signle-service">
                                    <img src={require("../assets/img/s2.jpg")} className="img-fluid" alt="" />
                                        <figcaption className="text-center">
                                            <h5 className="text-uppercase">Headset No Longer Wired</h5>
                                            <p>If you are in the market for a computer, there are a number of factors to consider. Will it be used for your home, your office or perhaps </p>
                                            <a href="#" className="primary-btn d-inline-flex align-items-center">Explore<span className="lnr lnr-arrow-right"></span></a>
                                        </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="signle-service">
                                    <img src={require("../assets/img/s3.jpg")} className="img-fluid" alt="" />
                                        <figcaption className="text-center">
                                            <h5 className="text-uppercase">Life Advice Looking At Window</h5>
                                            <p>Having a baby can be a nerve wrackingexp erience for new parents – not the nine months of pregnancy, I’m talking</p>
                                            <a href="#" className="primary-btn d-inline-flex align-items-center">Explore<span className="lnr lnr-arrow-right"></span></a>
                                        </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </ React.Fragment>
        );
    }
}

export default About;
