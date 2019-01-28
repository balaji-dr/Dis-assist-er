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
                                    <p className="text-white text-uppercase">Why Choose Us</p>
                                    <h2 className="text-white h1">We ensure perfect quality Digital <br/> products for you</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-star"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Unique Design</h4>
                                        <p>Most people who work in an office environment, buy computer products, or have </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-magic-wand"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Appropriate UX</h4>
                                        <p>Today, many people rely on computers to do homework, work, and create or store</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-sun"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Perfect Visual</h4>
                                        <p>Having a baby can be a nerve wracking experience for new parents – not the nine months </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-product">
                                    <div className="icon">
                                        <span className="lnr lnr-layers"></span>
                                    </div>
                                    <div className="desc">
                                        <h4>Different Layout</h4>
                                        <p>It won’t be a bigger problem to find one video game lover in your neighbor. Since the </p>
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
