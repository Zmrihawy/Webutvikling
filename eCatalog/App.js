import * as React from "react";
import { View, StyleSheet, Dimensions, AsyncStorage } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import MainView from "./MainView";
import ShoppingCartView from "./src/components/ShoppingCartView";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      storedComponents: [],
      routes: [
        { key: "first", title: "Browse" },
        { key: "second", title: "ShoppingCart" }
      ]
    };
    this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  handleIndexChange = (index) => {
    this.setState({index});
    AsyncStorage.getAllKeys((err1, keys) => {
      if (err1) console.log(err1)
      AsyncStorage.multiGet(keys, (err2, currentStoredComponents) => {
        if (err2) console.log(err2)
        this.setState({storedComponents: currentStoredComponents.map((x) => JSON.parse(x[1])) })
      });
    });
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: MainView,
          second: () => <ShoppingCartView components={this.state.storedComponents}/>
        })}
        onIndexChange={index => this.handleIndexChange(index)}
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
