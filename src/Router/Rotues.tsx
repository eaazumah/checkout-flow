import React from "react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "../404/NoMatch";
import Landing from "../Landing/Landing";
interface Props {}

const Rotues = (props: Props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
};

export default Rotues;
