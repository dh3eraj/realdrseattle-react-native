import React from "react";
import RootStack from "../navigation/RootStack";
import { Provider } from "react-redux";
import store from "../redux/Store";
export default function index() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
