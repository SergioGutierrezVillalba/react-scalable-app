import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HomeRoute } from "./home";
import { NameIdRoute } from "./name/id";

const routes = (props) => {
  return (
    <Router>
      <Switch>
        <HomeRoute />
        <NameIdRoute />
      </Switch>
    </Router>
  );
};

export default routes;
