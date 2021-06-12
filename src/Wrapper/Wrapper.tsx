import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSettings } from "../_shared";
import ThemeToggler from "./Componets/ThemeToggler";

interface Props {
  children: ReactNode;
}

const Wrapper = (props: Props) => {
  const { theme } = useSettings();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {props.children}
        <ThemeToggler />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Wrapper;
