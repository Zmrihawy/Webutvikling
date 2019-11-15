import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import MainView from "./MainView";
import ShoppingCartView from "./ShoppingCartView";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Browse" },
      { key: "second", title: "ShoppingCart" }
    ]
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: MainView,
          second: ShoppingCartView
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
