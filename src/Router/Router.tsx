import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Rotues";
interface Props {}

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
