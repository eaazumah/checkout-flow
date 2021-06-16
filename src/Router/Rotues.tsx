import { Route, Switch } from "react-router-dom";
import Confirmation from "../Confirmation/Confirmation";
import Success from "../Confirmation/Success";
import Landing from "../Landing/Landing";
import NoMatch from "../NoMatch/NoMatch";
import Payment from "../Payment/Payment";
interface Props {}

const Rotues = (props: Props) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/completed">
          <Success />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
};

export default Rotues;
