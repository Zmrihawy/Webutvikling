import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, ScrollView, AsyncStorage
} from 'react-native';

import {
  List
} from 'react-native-paper';

export default ShoppingCartView = (props) => {
  const { components } = props;
  const [expandedLists, setExpandedLists] = useState({});
  const [ storedComponents, setStoredComponents ] = useState([]);
  let mappedItems = [];

  const handlePress = (componentName) => {
    expandedLists[componentName] = !expandedLists[componentName];
    setExpandedLists(expandedLists);
  };

  useEffect(() => {
    AsyncStorage.getAllKeys((err1, keys) => {
      if (err1) console.log(err1)
      AsyncStorage.multiGet(keys, (err2, currentStoredComponents) => {
        if (err2) console.log(err2)
        setStoredComponents(currentStoredComponents.map((x) => JSON.parse(x[1])));
      });
    });
  }, [JSON.stringify(storedComponents)]);


  console.log("stored: ", storedComponents)
  mappedItems = components
    .map(x => x.component)
    .map((component) => (
      <List.Accordion
        key={component._id}
        style={{ backgroundColor: 'white', marginTop: 5 }}
        title={component.name}
        left={(listComponent) => <List.Icon {...listComponent} />}
        expanded={expandedLists[component.name]}
        onPress={() => handlePress(component.name)}
      >
        <List.Item style={listItemStyle} title={component.description} />
        <List.Item style={listItemStyle} title={component.producer} />
        <List.Item style={listItemStyle} title={component.category} />
        <List.Item style={listItemStyle} title={`${component.price}kr`} />
      </List.Accordion>
    ));

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  const listItemStyle = {
    backgroundColor: '#e8f4f8'
  };

  return (
    <View style={styles.margin}>
      <ScrollView>
        <View style={styles.body}>
          <List.Section>{mappedItems}</List.Section>
        </View>
      </ScrollView>
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
