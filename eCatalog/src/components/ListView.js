import React, { useState } from 'react';
import {
  View, StyleSheet, ScrollView, AsyncStorage
} from 'react-native';
import { List, Button, DataTable } from 'react-native-paper';

import Sidebar from './SideBar';
import { backendURL } from '../../config';

export default ListView = (props) => {
  const { components } = props;
  const [expandedLists, setExpandedLists] = useState({});
  const [filter, setfilter] = useState(false);

  const handlePress = (componentName) => {
    expandedLists[componentName] = !expandedLists[componentName];
    setExpandedLists(expandedLists);
  };

  const listItemStyle = {
    backgroundColor: '#e8f4f8'
  };

  const filterBy = () => {
    setfilter(!filter);
  };

  const saveData = (component) => {
    console.log('saving', component);
    AsyncStorage.getItem(component._id)
      .then((storedComponent) => {
        const newProduct = JSON.parse(storedComponent);
        if (!newProduct) {
          return AsyncStorage.setItem(
            component._id,
            JSON.stringify({ component, count: 1 })
          );
        }
        return AsyncStorage.setItem(
          component._id,
          JSON.stringify({ component, count: newProduct.count + 1 })
        );
      })
      .catch((err) => console.log(err));
  };

  const mappedComponents = components.map((component, i) => (
    <List.Accordion
      key={component._id}
      style={{ backgroundColor: 'white', marginTop: 5 }}
      title={component.name}
      left={(component) => <List.Icon {...component} />}
      expanded={expandedLists[component.name]}
      onPress={() => handlePress(component.name)}
    >
      <List.Item style={listItemStyle} title={component.description} />
      <List.Item style={listItemStyle} title={component.producer} />
      <List.Item style={listItemStyle} title={component.category} />
      <List.Item style={listItemStyle} title={`${component.price}kr`} />
      <Button icon="" mode="contained" onPress={() => saveData(component)}>
        Add to shopping cart
      </Button>
    </List.Accordion>
  ));

  return (
    <View>
      <View style={styles.heading}>
        <Button mode="contained" onPress={filterBy}>
          Filter by
        </Button>
        <Sidebar filter={filter} />
      </View>

      <View style={{ alignItems: 'center', width: '100%', marginBottom: 8 }}>
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => {
            console.log(page);
          }}
          label="Page 1 of 6"
        />
      </View>

      <ScrollView>
        <View style={styles.body}>
          <List.Section>{mappedComponents}</List.Section>
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
