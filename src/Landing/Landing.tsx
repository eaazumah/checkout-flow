import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

interface Props {}

const Landing = (props: Props) => {
  return (
    <Container>
      <Button>My Button</Button>
      <div>you are landing</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Landing;
