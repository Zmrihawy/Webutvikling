import React, { Component } from 'react';
import {
  View, StyleSheet, ScrollView, AsyncStorage, Button
} from 'react-native';
import { List, Snackbar } from 'react-native-paper';

import ShoppingCartView from './ShoppingCartView'

export default class ShoppingCartViewWrapper extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      visible: false,
    }
  }

  render() {
    const { components, clearAsyncStorage } = this.props;
    let mappedItems = [];

    console.log("state", this.state);

    return (
      <View>
        <ShoppingCartView components={components} clearAsyncStorage={clearAsyncStorage} showSnack={() => {console.log("setting to true"); this.setState({visible: true} )}}
        />
          <Snackbar
            visible={this.state.visible}
            onDismiss={() => (false)}
            action={{
              label: 'Undo',
              onPress: () => {
                // Do something
              },
            }}
          >
              Thank you for your purchase!
          </Snackbar>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  margin: { margin: 35 },
  h1: { fontSize: 28 },
  center: { alignItems: 'center' },
  small: { fontSize: 10 },
  heading: { margin: 10 },
  body: { color: 'white' }
});
