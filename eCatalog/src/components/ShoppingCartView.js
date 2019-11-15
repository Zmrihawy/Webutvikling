import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  Button
} from 'react-native';
import { List, Snackbar } from 'react-native-paper';


/**
 * Component for viewing the shoppingcart, and also 
 * buying the components
 */
export default ShoppingCartView = (props) => {
  const { components, clearAsyncStorage, showSnack } = props;
  const [expandedLists, setExpandedLists] = useState({});
  const [componentsVar, setComponentsVar] = useState(components);

  let mappedItems = [];

  const handlePress = (componentName) => {
    expandedLists[componentName] = !expandedLists[componentName];
    setExpandedLists(expandedLists);
  };

  mappedItems = componentsVar.map((component) => (
    <List.Accordion
      key={component.component._id}
      style={{ backgroundColor: 'white', marginTop: 5 }}
      title={`${component.count} x ${component.component.name}`}
      expanded={expandedLists[component.component.name]}
      onPress={() => handlePress(component.component.name)}
    >
      <List.Item
        style={listItemStyle}
        title={component.component.description}
      />
      <List.Item style={listItemStyle} title={component.component.producer} />
      <List.Item style={listItemStyle} title={component.component.category} />
      <List.Item
        style={listItemStyle}
        title={`${component.component.price}kr`}
      />
    </List.Accordion>
  ));

  const listItemStyle = {
    backgroundColor: '#e8f4f8'
  };

  // Buy items in cart. Show a messeage if components are not empty.
  const buyItems = () => {
    if (componentsVar.length > 0) {
      showSnack();
    }
    setComponentsVar([]);
    clearAsyncStorage();
  };

  return (
    <View style={styles.margin}>
      <Button
        title={`Buy items in cart for ${componentsVar
          .map((x) => x.component.price * x.count)
          .reduce((i, j) => i + j, 0)} kr `}
        onPress={buyItems}
      />
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
