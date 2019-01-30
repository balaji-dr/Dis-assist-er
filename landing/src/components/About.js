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
                                    <p className="text-uppercase">About Our App</p>
                                    <h3>A unique solution aimed at providing all sorts of supports for assisting disaster victms. It also serves as a platform for connecting the <b>volunteers and victims</b></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ React.Fragment>
        );
    }
}

export default About;
