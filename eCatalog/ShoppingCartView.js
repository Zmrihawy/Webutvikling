import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export default function ShoppingCartView() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar hidden />
      <Text>Shopping cart! :D</Text>
    </PaperProvider>
  );
}

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
