import React from "react";
import { Route, Switch } from "react-router-dom";
import UseState from "./UseState";
import CustomHooks from "./CustomHooks";
import UseEffect from "./UseEffect";

const HooksPage: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={`/hooks/`} component={UseState} />
        <Route exact path={`/hooks/useState`} component={UseState} />
        <Route exact path={`/hooks/useEffect`} component={UseEffect} />
        <Route exact path={`/hooks/customHooks`} component={CustomHooks} />
      </Switch>
    </div>
  );
};

export default HooksPage;
