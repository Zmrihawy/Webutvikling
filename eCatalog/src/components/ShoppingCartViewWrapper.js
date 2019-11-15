import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, ScrollView, AsyncStorage, Button
} from 'react-native';
import { List, Snackbar } from 'react-native-paper';

import ShoppingCartView from './ShoppingCartView'

export default ShoppingCartViewWrapper = (props) => {
  const { components, clearAsyncStorage } = props;
  const [snackVisible, setSnackVisible] = useState(false);

  let mappedItems = [];

  console.log("visible", snackVisible);
  console.log("props:", props)

  return (
    <View>
      <ShoppingCartView components={components} clearAsyncStorage={clearAsyncStorage} showSnack={setSnackVisible} />

        <Snackbar
          visible={snackVisible}
          onDismiss={() => (false)}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: { margin: 35 },
  h1: { fontSize: 28 },
  center: { alignItems: 'center' },
  small: { fontSize: 10 },
  heading: { margin: 10 },
  body: { color: 'white' }
});
