import React, { lazy } from "react";
import { Route } from "react-router-dom";

const homeModule = {
  url: "/home",
  component: lazy(() =>
    import("../../components/home").then((module) => module.Home)
  ),
};

const route = () => {
  return <Route path="/home">{homeModule.component}</Route>;
};

export default route;
