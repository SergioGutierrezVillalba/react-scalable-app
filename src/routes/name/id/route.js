import React, { lazy } from "react";
import { Route } from "react-router-dom";

const nameIdModule = {
  url: "/name/:id",
  component: lazy(() =>
    import("../../../components/name").then((module) => module.Name)
  ),
};

const route = () => {
  return <Route path="/name/:id">{nameIdModule.component}</Route>;
};

export default route;
