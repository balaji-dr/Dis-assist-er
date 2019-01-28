import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "../components/Main";
import Funds from "../components/Funds";
import Login from "../components/Login";

function MainRouter() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/funds" component={Funds} />
            </div>
        </Router>
    );
}

export default MainRouter;
