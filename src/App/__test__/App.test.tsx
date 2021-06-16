import { render } from "@testing-library/react";
import App from "../App";

test("renders app", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
