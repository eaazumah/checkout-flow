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
