import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Protected } from "./layouts";
import { WithProtectedRoute } from "./routers";

import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Blogs from "./pages/Blogs";

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
        <WithProtectedRoute
          exact
          path="/campaigns"
          layout={Protected}
          component={Campaigns}
        />
        <WithProtectedRoute
          exact
          path="/blogs"
          layout={Protected}
          component={Blogs}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
