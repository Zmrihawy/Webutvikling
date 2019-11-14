import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ListView from './src/components/ListView';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { backendURL } from './config';


export default function App() {

  const [components, setComponents] = useState([]);

  useEffect(() => {
    console.log("fetching");
    console.log(backendURL);
    fetch(backendURL + 'component')
      .then(res => res.json())
      .then(res => {
        console.log("fetched", res);
        setComponents(res)
      })
      .catch(err => console.log("error", err))
  },[components])

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
    backgroundColor: '#D0D3D4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


// DefaultTheme colors
const theme = {
    ...DefaultTheme,
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        primary: 'blue',
        accent: 'green',
    },
}
