import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import Wrapper from "../../Wrapper/Wrapper";
import { store } from "../../_shared";

const renderWrapper = (): RenderResult => {
  return render(
    <Provider store={store}>
      <Wrapper>
        <div />
      </Wrapper>
    </Provider>
  );
};

test("renders learn react link", () => {
  const { asFragment } = renderWrapper();
  expect(asFragment()).toMatchSnapshot();
});
