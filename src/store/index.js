import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import Counter from "./Counter";

const store = configureStore({
  reducer: { counter: Counter, auth: auth },
});

export default store;
