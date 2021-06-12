import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

test("renders learn react link", () => {
  const { asFragment } = render(<App />);

  const linkElement = screen.getByText(/My Button/i);

  expect(asFragment()).toMatchSnapshot();

  expect(linkElement).toBeInTheDocument();
});
