import { render, screen } from "@testing-library/react";
import React from "react";
import Landing from "../Landing";

test("renders learn react link", () => {
  render(<Landing />);
  const linkElement = screen.getByText(/you are landing/i);
  expect(linkElement).toBeInTheDocument();
});
