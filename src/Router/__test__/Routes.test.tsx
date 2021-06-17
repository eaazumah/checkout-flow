import "@testing-library/jest-dom/extend-expect";
import { render, RenderResult, screen } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Wrapper from "../../Wrapper/Wrapper";
import { store } from "../../_shared";
import Routes from "../Rotues";

const renderRoutes = (history: MemoryHistory<unknown>): RenderResult => {
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
  const history = createMemoryHistory();
  const { asFragment } = renderRoutes(history);
  expect(asFragment()).toMatchSnapshot();
});

test("landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  const { asFragment } = renderRoutes(history);
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});

test("landing on a success page", () => {
  const history = createMemoryHistory();
  history.push("/completed");
  const { asFragment } = renderRoutes(history);
  expect(asFragment()).toMatchSnapshot();

  expect(screen.getByText(/Completed successfully/)).toBeInTheDocument();
});
