import { combineReducers } from "redux";


import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./reducers/app";

const reducers = combineReducers({
  app: appSlice.reducer,
});

export default configureStore({ reducer: reducers });

export type IRootState = ReturnType<typeof reducers>;
