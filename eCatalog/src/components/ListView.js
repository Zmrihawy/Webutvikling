import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView
} from 'react-native';
import {
  Searchbar,
  List,
  Checkbox,
  Button,
  DataTable
} from 'react-native-paper';

import Sidebar from './SideBar';

export default ListView = (props) => {
  const { components } = props;
  const [expandedLists, setExpandedLists] = useState({});
  const [filter, setfilter] = useState(false);
  const [searchText, setSearchText] = useState('');

  _handlePress = (componentName) => {
    expandedLists[componentName] = !expandedLists[componentName];
    setExpandedLists(expandedLists);
  };

  const listItemStyle = {
    backgroundColor: '#e8f4f8'
  };

  const mappedComponents = components.map((component, i) => (
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
  ));

  filterBy = () => {
    setfilter(!filter);
  };

  return (
    <View style={styles.margin}>
      <View style={(styles.center, styles.heading)}>
        <Text style={styles.h1}>eCatalog</Text>
        <Text style={styles.small}>home for electronics</Text>
      </View>
      <View>
        <Searchbar
          placeholder="Search for a pc, mobile, TV ... "
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

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
