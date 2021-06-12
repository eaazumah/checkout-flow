import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useSettings } from "../_shared";

interface Props {
  children: ReactNode;
}

const Wrapper = (props: Props) => {
  const { theme } = useSettings();

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Wrapper;
