import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import Wrapper from "../../Wrapper/Wrapper";
import { store } from "../../_shared";
import Landing from "../Landing";

const renderLanding = (): RenderResult => {
  return render(
    <Provider store={store}>
      <Wrapper>
        <Landing />
      </Wrapper>
    </Provider>
  );
};

test("renders landing", () => {
  const { asFragment } = renderLanding();
  expect(asFragment()).toMatchSnapshot();
});
