import React, { Component } from 'react';




class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="banner-area relative">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row fullscreen justify-content-center align-items-center">
                            <div className="col-lg-8">
                                <div className="banner-content text-center">
                                    <p className="text-uppercase text-white">We assist, during disaster</p>
                                    <h1 className="text-uppercase text-white">Dis - Assist - er</h1>
                                    <a href="#" className="primary-btn banner-btn">Explore Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ React.Fragment>
        );
    }
}

export default Home;
