import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ListView from './src/components/ListView';


import { backendURL } from './config';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <ListView />
      </View>
    </PaperProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0D3F4'
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
    primary: 'blue',
    accent: 'green'
  }
};
