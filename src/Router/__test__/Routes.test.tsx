import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import Routes from "../Rotues";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routes />
    </Router>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
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
