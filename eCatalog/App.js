import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ListView from './src/components/ListView';
import ShoppingCartView from './src/components/ShoppingCartView'
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
        setComponents(res)
      })
      .catch(err => console.log("error", err))
  },[JSON.stringify(components)])

  return (
    <PaperProvider theme={theme}>
        <View style={styles.container}>
          <ListView components={components}/>
        </View>
        <View style={styles.container}>
          <ShoppingCartView />
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
