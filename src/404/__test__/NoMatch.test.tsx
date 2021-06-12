import { render, RenderResult, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import Wrapper from "../../Wrapper/Wrapper";
import { store } from "../../_shared";
import MoMatch from "../NoMatch";

const renderMoMatch = (): RenderResult => {
  return render(
    <Provider store={store}>
      <Wrapper>
        <MoMatch />
      </Wrapper>
    </Provider>
  );
};

test("renders learn react link", () => {
  const { asFragment } = renderMoMatch();
  expect(asFragment).toMatchSnapshot();
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
