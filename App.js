import React from "react";

import "react-native-gesture-handler";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navigation from "./screens/Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
