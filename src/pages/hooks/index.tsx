import React from "react";
import { Route, Switch } from "react-router-dom";
import UseState from "./UseState";
import CustomHooks from "./CustomHooks";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import UseRef from "./UseRef";
import UseRematch from "./UseRematch";

const HooksPage: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={`/hooks/`} component={UseState} />
        <Route exact path={`/hooks/useState`} component={UseState} />
        <Route exact path={`/hooks/useEffect`} component={UseEffect} />
        <Route exact path={`/hooks/useContext`} component={UseContext} />
        <Route exact path={`/hooks/useMemo`} component={UseMemo} />
        <Route exact path={`/hooks/useCallback`} component={UseCallback} />
        <Route exact path={`/hooks/useRef`} component={UseRef} />
        <Route exact path={`/hooks/customHooks`} component={CustomHooks} />
        <Route exact path={`/hooks/useRematch`} component={UseRematch} />
      </Switch>
    </div>
  );
};

export default HooksPage;
