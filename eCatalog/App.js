import * as React from "react";
import { View, StyleSheet, Dimensions, AsyncStorage } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import MainView from "./MainView";
import ShoppingCartViewWrapper from "./src/components/ShoppingCartViewWrapper";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      storedComponents: [],
      routes: [
        { key: "first", title: "Browse" },
        { key: "second", title: "ShoppingCart" }
      ],
      ShoppingCartViewWrapperVar: () => (
        <ShoppingCartViewWrapper
          components={this.state.storedComponents}
          clearAsyncStorage={this.clearAsyncStorage}
        />
      )
    };
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.clearAsyncStorage = this.clearAsyncStorage.bind(this);
  }

  clearAsyncStorage = async () => {
    AsyncStorage.clear();
    this.setState({
      storedComponents: []
    });
  };

  handleIndexChange = index => {
    this.setState({ index });
    AsyncStorage.getAllKeys((err1, keys) => {
      if (err1) console.log(err1);
      AsyncStorage.multiGet(keys, (err2, currentStoredComponents) => {
        if (err2) console.log(err2);
        console.log(currentStoredComponents);
        this.setState({
          storedComponents: currentStoredComponents.map(x => JSON.parse(x[1])),
          ShoppingCartViewWrapperVar: () => (
            <ShoppingCartViewWrapper
              components={currentStoredComponents.map(x => JSON.parse(x[1]))}
              clearAsyncStorage={this.clearAsyncStorage}
            />
          )
        });
      });
    });
  };

  render() {
    console.log("THIS IS THE STATE", this.state.storedComponents);
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: MainView,
          second: this.state.ShoppingCartViewWrapperVar
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
