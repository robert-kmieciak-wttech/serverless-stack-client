import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>



      {/* Finally, catch all unmatched routes block below to catch all
      the not found routes has to be last*/}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}