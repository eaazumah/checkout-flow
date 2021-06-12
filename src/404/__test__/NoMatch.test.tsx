import { render, screen } from "@testing-library/react";
import React from "react";
import MoMatch from "../NoMatch";
test("renders learn react link", () => {
  render(<MoMatch />);
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
