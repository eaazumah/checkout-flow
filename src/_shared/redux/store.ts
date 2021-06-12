import { persistStore } from "redux-persist";
import createStore from "./createStore";

export const store = createStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
