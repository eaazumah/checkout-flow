import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import "./App.css";

const App = () => {
  return (
    <Container>
      <Button>My Button</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
