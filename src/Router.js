import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Hook1 from "./Hook1";
import Hook2 from "./Hook2"

export default () => {
    return (
        <Router>
            <Header />
                <Route path="/" exact component={Hook1} />
                <Route path="/hook2" component={Hook2} />
        </Router>
    );
};
