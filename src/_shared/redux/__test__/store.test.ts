import { paymentInfoActions } from "../payment/slice";
import { planActions } from "../plan/slice";
import { settingsActions } from "../settings/slice";
import { store } from "../store";

test("Updates and reset settings", () => {
  const { updates, reset } = settingsActions;

  // initial settings state
  let settings = store.getState().settings;
  expect(settings?.theme).toBe("light");

  // update settings
  store.dispatch(updates({ theme: "dark" }));
  settings = store.getState().settings;
  expect(settings?.theme).toBe("dark");

  // reset settings
  store.dispatch(reset());
  settings = store.getState().settings;
  expect(settings?.theme).toBe("light");
});

test("Updates and reset plan", () => {
  const { updates, reset } = planActions;

  // initial plan state
  let plan = store.getState().plan;
  expect(plan?.size).toBe(5);
  expect(plan?.duration).toBe(12);

  // update plan
  store.dispatch(updates({ duration: 6, size: 10 }));
  plan = store.getState().plan;
  expect(plan?.size).toBe(10);
  expect(plan?.duration).toBe(6);

  // reset plan
  store.dispatch(reset());
  plan = store.getState().plan;
  expect(plan?.size).toBe(5);
  expect(plan?.duration).toBe(12);
});

test("Updates and reset payment info", () => {
  const { updates, reset } = paymentInfoActions;

  // initial settings state
  let paymentInfo = store.getState().paymentInfo;
  expect(paymentInfo?.email).toBe("");
  expect(paymentInfo?.cvv).toBe("");

  // update settings
  store.dispatch(updates({ email: "email@gmail.com", cvv: "234" }));
  paymentInfo = store.getState().paymentInfo;
  expect(paymentInfo?.email).toBe("email@gmail.com");
  expect(paymentInfo?.cvv).toBe("234");

  // reset paymentInfo
  store.dispatch(reset());
  paymentInfo = store.getState().paymentInfo;
  expect(paymentInfo?.email).toBe("");
  expect(paymentInfo?.cvv).toBe("");
});
