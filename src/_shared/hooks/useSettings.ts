import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../constants";
import { settingsActions } from "../redux/settings/slice";
import { IReduxSate, ISettings } from "../types";

export const useSettings = () => {
  const dispatch = useDispatch();
  const { reset, updates } = settingsActions;
  const state = useSelector<IReduxSate, ISettings>((state) => state.settings);

  const { theme: _theme } = state;

  const resetSettings = () => {
    dispatch(reset());
  };

  const updateSettings = (data: Partial<ISettings>) => {
    dispatch(updates(data));
  };

  const toggleTheme = () => {
    if (_theme === "light") {
      return dispatch(updates({ theme: "dark" }));
    }
    dispatch(updates({ theme: "light" }));
  };

  const theme = _theme === "light" ? lightTheme : darkTheme;

  return {
    theme,
    _theme,
    toggleTheme,
    resetSettings,
    updateSettings,
  };
};
