import React, { Component } from 'react';




class Azure extends Component {
    render() {
        return (
            <div>
                <section id="AZURE" className="title-bg section-full">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">
                                    <p className="text-white text-uppercase"></p>
                                    <h2 className="text-white h1"> How Microsoft Azure powers <br/> Dis-assist-er? </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-heart-pulse"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Cognitive Service</h4>
                                        <p> The emotion API analysis the issues to assign priority. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-magic-wand"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Bot Framework</h4>
                                        <p> Azure Bot Framework powers the Surviva Bot which interacts with the users. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-sun"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>QnA Maker</h4>
                                        <p> QnA maker trained with questions and answers about disasters. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-layers"></span>
                                    </div>
                                    <div className="desc">
                                        <h4> Virtual Machine </h4>
                                        <p> VM that helps run our backend system. </p>
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

export default Azure;
