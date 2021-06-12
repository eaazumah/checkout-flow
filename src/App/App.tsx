import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "../Router/Router";
import Wrapper from "../Wrapper/Wrapper";
import { persistor, store } from "../_shared";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Wrapper>
          <Router />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
