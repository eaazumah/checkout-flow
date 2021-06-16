import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import Wrapper from "../../Wrapper/Wrapper";
import { store } from "../../_shared";
import Plans from "../Plans";

const renderPlans = (): RenderResult => {
  return render(
    <Provider store={store}>
      <Wrapper>
        <Plans />
      </Wrapper>
    </Provider>
  );
};

test("renders Plans", () => {
  const { asFragment } = renderPlans();
  expect(asFragment()).toMatchSnapshot();
});
