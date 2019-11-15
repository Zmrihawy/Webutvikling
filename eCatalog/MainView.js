import React, { useState, useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import ListView from "./src/components/ListView";

import { backendURL } from "./config";

export default function MainView() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    console.log("fetching");
    console.log(backendURL);
    fetch(`${backendURL}component`)
      .then(res => res.json())
      .then(res => {
        setComponents(res);
      })
      .catch(err => console.log("error", err));
  }, [JSON.stringify(components)]);

  return (
    <PaperProvider theme={theme}>
      <StatusBar hidden />
      <View style={styles.container}>
        <ListView components={components} />
      </View>
    </PaperProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0D3F4"
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});

// DefaultTheme colors
const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "blue",
    accent: "green"
  }
};
