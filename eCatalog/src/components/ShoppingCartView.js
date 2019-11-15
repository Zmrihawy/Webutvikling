import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, ScrollView, AsyncStorage, Button
} from 'react-native';
import { List, Snackbar } from 'react-native-paper';

export default ShoppingCartView = (props) => {
  const { components, clearAsyncStorage } = props;
  const [expandedLists, setExpandedLists] = useState({});
  const [storedComponents, setStoredComponents] = useState([]);
  const [snackVisible, setSnackVisible] = useState(false);

  let mappedItems = [];

  const handlePress = (componentName) => {
    expandedLists[componentName] = !expandedLists[componentName];
    setExpandedLists(expandedLists);
  };


  mappedItems = components
    .map((x) => x.component)
    .map((component) => (
      <List.Accordion
        key={component._id}
        style={{ backgroundColor: 'white', marginTop: 5 }}
        title={component.name}
        // left={(listComponent) => <List.Icon {...listComponent} />}
        expanded={expandedLists[component.name]}
        onPress={() => handlePress(component.name)}
      >
        <List.Item style={listItemStyle} title={component.description} />
        <List.Item style={listItemStyle} title={component.producer} />
        <List.Item style={listItemStyle} title={component.category} />
        <List.Item style={listItemStyle} title={component.price + "kr"} />
      </List.Accordion>
    ));

  const listItemStyle = {
    backgroundColor: '#e8f4f8'
  };

  const buyItems = () => {
    console.log("before", snackVisible)
    setSnackVisible(true);
    console.log("after", snackVisible)
    clearAsyncStorage();
  }

  console.log(snackVisible);
  return (
    <View style={styles.margin}>

      <Button title={"buy button"} onPress={buyItems}>
        {"Buy items in cart"}
      </Button>
      <ScrollView>
        <View style={styles.body}>
          <List.Section>{mappedItems}</List.Section>
        </View>

      </ScrollView>
          <Snackbar
          visible={snackVisible}
          onDismiss={() => setSnackVisible(false)}
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
