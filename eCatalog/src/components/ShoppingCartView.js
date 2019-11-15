import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, AsyncStorage } from "react-native";

import { Searchbar, List, Checkbox, Button } from "react-native-paper";

export default ShoppingCartView = props => {
  const { components } = props;
  const [expandedLists, setExpandedLists] = useState({});
  let mappedItems = [];

  _handlePress = componentName => {
    expandedLists[componentName] = !expandedLists[componentName];
    setExpandedLists(expandedLists);
  };

  try {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, components) => {
        console.log("heeeredsagsgfdsgsg", components);

        mappedItems = components
          .map(x => JSON.parse(x[1]))
          .map((component, i) => {
            <List.Accordion
              key={i}
              style={{ backgroundColor: "white", marginTop: 5 }}
              title={component.name}
              left={component => <List.Icon {...component} />}
              expanded={expandedLists[component.name]}
              onPress={() => _handlePress(component.name)}
            >
              <List.Item style={listItemStyle} title={component.description} />
              <List.Item style={listItemStyle} title={component.producer} />
              <List.Item style={listItemStyle} title={component.category} />
              <List.Item style={listItemStyle} title={`${component.price}kr`} />
            </List.Accordion>;
          });
      });
    });
  } catch (error) {
    alert(error);
  }

  _clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  const listItemStyle = {
    backgroundColor: "#e8f4f8"
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
  center: { alignItems: "center" },
  small: { fontSize: 10 },
  heading: { margin: 10 },
  body: { color: "white" }
});
