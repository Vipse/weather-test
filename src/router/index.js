import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import StaticWeather from "modules/StaticWeather";
import RainChance from "modules/RainChance";
import TopNav from "modules/TopNav";

const Root = () => <Redirect to="/rain-chance" />;

const AppRouter = () => {
    return (
        <Router>
            <Route path="/" component={TopNav}/>
            <Switch>
                <Route exact path="/rain-chance" component={RainChance}/>
                <Route exact path="/static-weather" component={StaticWeather}/>
                <Route path="/" component={Root}/>
            </Switch>
        </Router>
    );
};

export default AppRouter;
