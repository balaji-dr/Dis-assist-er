import React, { Component } from 'react';




class Question extends Component {
    render() {
        return (
            <div>
                <section className="cta-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 d-flex no-flex-xs justify-content-between align-items-center">
                                <h5 className="text-uppercase text-white">Want to test out our android app?</h5>
                                <a href="#" className="primary-btn d-inline-flex text-uppercase text-white align-items-center">Download Prototype<span className="lnr lnr-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                </section>
            </ div>
        );
    }
}

export default Question;
