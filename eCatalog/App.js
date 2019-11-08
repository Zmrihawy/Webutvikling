import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './src/components/ListView';

// DefaultTheme for a theme
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider theme={theme} style={styles.body}>
        <View style={styles.container}>
            <ListView />
            <Text>This Works!</Text>
        </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  body: { margin: 10},
});


const theme = {
    ...DefaultTheme,
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        accent: 'green',
    },
}
