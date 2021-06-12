import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../Landing/Landing";
import NoMatch from "../NoMatch/NoMatch";
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
