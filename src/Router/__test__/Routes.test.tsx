import "@testing-library/jest-dom/extend-expect";
import { render, RenderResult, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Wrapper from "../../Wrapper/Wrapper";
import { store } from "../../_shared";
import Routes from "../Rotues";

const renderRoutes = (): RenderResult => {
  const history = createMemoryHistory();
  return render(
    <Provider store={store}>
      <Wrapper>
        <Router history={history}>
          <Routes />
        </Router>
      </Wrapper>
    </Provider>
  );
};

test("full app rendering/navigating", () => {
  const { asFragment } = renderRoutes();
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText(/you are landing/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  render(
    <Router history={history}>
      <Routes />
    </Router>
  );

  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
