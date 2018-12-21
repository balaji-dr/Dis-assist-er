import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="top"></div>
                <header className="default-header">
                    <div className="sticky-header">
                        <div className="container">
                            <div className="header-content d-flex justify-content-between align-items-center">
                                <div className="corner-ribbon right">Code.Fun.Do ++</div>

                                <div className="logo">
                                    <a href="#top" className="smooth"><img src={require("../assets/img/logo.png")} alt="" /></a>
                                </div>
                                <div className="right-bar d-flex align-items-center">
                                    <nav className="d-flex align-items-center">
                                        {/*<ul className="main-menu">*/}
                                            {/*<li><a href="#top">Home</a></li>*/}
                                            {/*<li><a href="#services">Services</a></li>*/}
                                            {/*<li><a href="#team">Team</a></li>*/}
                                            {/*<li><a href="#contact">Contact</a></li>*/}
                                        {/*</ul>*/}
                                        {/*<a href="#" className="mobile-btn"><span className="lnr lnr-menu"></span></a>*/}
                                    </nav>

                                    <div className="header-social d-flex align-items-center row">
                                        <a href="#"><i className="fa fa-android fa-4x"></i> &nbsp;</a>
                                        <a href="#"><i className="fa fa-github-alt fa-4x"></i> &nbsp;</a>
                                        <a href="#"><i className="fa fa-windows fa-4x"></i></a>
                                        <div>
                                            <a href="">
                                                Academia Accelerator
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </React.Fragment>
        );
    }
}

export default Header;
