import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import ThemeToggler from "./Componets/ThemeToggler";

interface Props {}

const Landing = (props: Props) => {
  return (
    <Container>
      <Button>My Button</Button>
      <div>you are landing</div>
      <ThemeToggler />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Landing;
