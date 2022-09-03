import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./AppStateSlice/appStateSlice";

const store = configureStore({
  reducer: {
    appStateReducer,
  },
});

export default store;
