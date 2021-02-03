import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Protected } from "./layouts";
import { WithProtectedRoute } from "./routers";

import Home from "./pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <WithProtectedRoute
          exact
          path="/"
          layout={Protected}
          component={Home}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
