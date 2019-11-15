import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView
} from 'react-native';
import { List, Button, DataTable } from 'react-native-paper';

import Sidebar from './SideBar';
import { backendURL } from '../../config';

export default ListView = () => {
  const [components, setComponents] = useState([]);
  const [expandedLists, setExpandedLists] = useState({});
  const [filter, setfilter] = useState(false);
  const [query, setQuery] = useState('');

  _handlePress = (componentName) => {
    expandedLists[componentName] = !expandedLists[componentName];
    setExpandedLists(expandedLists);
  };

  const listItemStyle = {
    backgroundColor: '#e8f4f8'
  };

  const fetchData = (query) => {
    setQuery(query);
    console.log('fetching wtith query: ', query);
    const url = `${backendURL}component/pagination/?${query}`;
    console.log('fetching with url ', url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setComponents(res);
      })
      .catch((err) => console.log('error', err));
  };

  useEffect(() => {
    console.log('fetching wtith query in useeffect: ', query);
    fetch(`${backendURL}component/pagination/?${query}`)
      .then((res) => res.json())
      .then((res) => {
        setComponents(res);
      })
      .catch((err) => console.log('error', err));
  }, [JSON.stringify(components.components)]);

  const mappedComponents = components && components.components && components.components.length > 0
    ? components.components.map((component, i) => (
      <List.Accordion
        key={i}
        style={{ backgroundColor: 'white', marginTop: 5, borderRadius: 4 }}
        title={component.name}
        left={(component) => <List.Icon {...component} />}
        expanded={expandedLists[component.name]}
        onPress={() => _handlePress(component.name)}
      >
        <List.Item style={listItemStyle} title={component.description} />
        <List.Item style={listItemStyle} title={component.producer} />
        <List.Item style={listItemStyle} title={component.category} />
        <List.Item style={listItemStyle} title={`${component.price}kr`} />
      </List.Accordion>
    ))
    : [];

  filterBy = () => {
    setfilter(!filter);
  };
  console.log('Mapped', mappedComponents);
  return (
    <View style={styles.margin}>
      <View style={(styles.center, styles.heading)}>
        <Text style={styles.h1}>eCatalog</Text>
        <Text style={styles.small}>home for electronics</Text>
      </View>

      <View style={styles.heading}>
        <Button mode="contained" onPress={filterBy}>
          Filter by
        </Button>
        <Sidebar filter={filter} setQuery={fetchData} />
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
