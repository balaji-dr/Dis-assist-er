import React, { Component } from 'react';






class Home extends Component {
    render() {
        return (
            <div>
                <div className="container pt-150">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
                            <div className="list text-center">
                                <div className="list-item">
                                    <div className="progressBar progressBar--animateNone" data-progress="80">
                                        <svg className="progressBar-contentCircle"  viewBox="0 0 200 200">
                                            <circle transform="rotate(-90, 100, 100)" className="progressBar-background" cx="100" cy="100" r="95" />
                                            <circle transform="rotate(-90, 100, 100)" className="progressBar-circle" cx="100" cy="100" r="95" />
                                        </svg>
                                        <span className="progressBar-percentage progressBar-percentage-count"></span>
                                    </div>
                                </div>
                                <p className="text-uppercase">Web Design</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
                            <div className="list text-center">
                                <div className="list-item">
                                    <div className="progressBar progressBar--animateText" data-progress="75">
                                        <svg className="progressBar-contentCircle"  viewBox="0 0 200 200">
                                            <circle transform="rotate(-90, 100, 100)" className="progressBar-background" cx="100" cy="100" r="95" />
                                            <circle transform="rotate(-90, 100, 100)" className="progressBar-circle" cx="100" cy="100" r="95" />
                                        </svg>
                                        <span className="progressBar-percentage progressBar-percentage-count"></span>
                                    </div>
                                </div>
                                <p className="text-uppercase">UI/UX Design</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
                            <div className="list text-center">
                                <div className="list-item">
                                    <div className="progressBar progressBar--animateCircle" data-progress="60">
                                        <svg className="progressBar-contentCircle"  viewBox="0 0 200 200">
                                            <circle transform="rotate(-90, 100, 100)" className="progressBar-background" cx="100" cy="100" r="95" />
                                            <circle transform="rotate(-90, 100, 100)" className="progressBar-circle" cx="100" cy="100" r="95" />
                                        </svg>
                                        <span className="progressBar-percentage progressBar-percentage-count"></span>
                                    </div>
                                </div>
                                <p className="text-uppercase">Mobile App</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-flex justify-content-center">
                            <div className="list text-center">
                                <div className="list-item">
                                    <div className="progressBar progressBar--animateAll" data-progress="90">
                                        <svg className="progressBar-contentCircle"  viewBox="0 0 200 200">
                                            <circle transform="rotate(-90, 100, 100)" className="progressBar-background" cx="100" cy="100" r="95" />
                                            <circle transform="rotate(-90, 100, 100)" className="progressBar-circle" cx="100" cy="100" r="95" />
                                        </svg>
                                        <span className="progressBar-percentage progressBar-percentage-count"></span>
                                    </div>
                                </div>
                                <p className="text-uppercase">Web Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ div>
        );
    }
}

export default Home;
