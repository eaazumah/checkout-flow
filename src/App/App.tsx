import React from "react";
import Button from "react-bootstrap/Button";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import styled from "styled-components";
import { persistor, store } from "../_shared";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <Button>My Button</Button>
        </Container>
      </PersistGate>
    </Provider>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
