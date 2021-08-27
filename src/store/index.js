import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import counter from "./counter";

const store = configureStore({
  reducer: { counter: counter, auth: auth },
});

export default store;
