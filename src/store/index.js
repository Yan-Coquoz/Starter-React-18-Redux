import { configureStore } from "@reduxjs/toolkit";
import { exemple } from "actions";

const store = configureStore({
  reducer: { exemple },
});

export default store;
